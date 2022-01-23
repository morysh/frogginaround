<?php

namespace Wangularp;

require_once  __DIR__.'/model/post.class.php';
require_once  __DIR__.'/model/preview.class.php';

use Closure;
use Wangularp\Model;
use WP_Error;
use WP_REST_Response;

class WangularpController extends \WP_REST_Controller {
	const PAGE_SIZE = 12;

	public function __construct() {
		$this->namespace     = '/wangularp/v1';
	}

  public function register_routes() {
    register_rest_route( $this->namespace, '/previews', [
            'methods'   => 'GET',
            'callback'  => array( $this, 'previews' ),
				]
    );
    register_rest_route( $this->namespace, '/header', [
						'methods'   => 'GET',
						'callback'  => array( $this, 'custom_header' ),
				]
    );
    register_rest_route( $this->namespace, '/(?P<id>\d+)', [
						'methods'   => 'GET',
						'callback'  => array( $this, 'post' ),
				]
    );
	}

	public function previews($request){
		$page = $request->get_query_params()['page'];

		$args = [
			'post_per_page' => self::PAGE_SIZE,
			'page' => empty($page) ? $page : 1,
		];

		return $this->get_data($args, fn($post) => new Model\Preview($post));
		// return $this->get_posts($args);
	}

	public function post($data) {
		$id = $data['id'];
		$post = get_post($id);

		if(empty($post)) {
			return new WP_REST_Response('No post found for ID \''.$id.'\'', 404);
		} else {
			return new Model\Post($post, true); 
		}
	}

	public function custom_header($data) {
		if(empty(get_custom_header()->url)) {
			return new WP_REST_Response('No custom header defined', 404);
		} else {
			wp_redirect(get_custom_header()->url);
			exit();
		}
	}

	private function get_data(array $args, Closure $callback) {
		$query = new \WP_Query($args);

		$data = [];

		while ( $query->have_posts() ) {
			$data[] = $callback($query->next_post());
		}

		return $data;
	}
}
