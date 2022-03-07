<?php

namespace Wangularp;

require_once __DIR__.'/model/image.class.php';
require_once __DIR__.'/model/post.class.php';
require_once __DIR__.'/model/preview.class.php';
require_once __DIR__.'/helpers/angular-helper.php';

use Closure;
use Wangularp\Model;
use WP_REST_Response;

class WangularpController extends \WP_REST_Controller {
	const PAGE_SIZE = -1;

	public function __construct() {
		$this->namespace = '/wangularp/v1';
	}

  public function register_routes() {
    register_rest_route( $this->namespace, '/previews', [
            'methods'   => 'GET',
            'callback'  => array( $this, 'previews'),
				]
    );
    register_rest_route( $this->namespace, '/previews/category/(?P<category>\d+)', [
            'methods'   => 'GET',
            'callback'  => array( $this, 'previews_by_category'),
				]
    );
    register_rest_route( $this->namespace, '/header', [
						'methods'   => 'GET',
						'callback'  => array( $this, 'custom_header'),
				]
    );
    register_rest_route( $this->namespace, '/(?P<id>\d+)', [
						'methods'   => 'GET',
						'callback'  => array( $this, 'post'),
				]
    );
    register_rest_route( $this->namespace, '/menu', [
						'methods'   => 'GET',
						'callback'  => array( $this, 'menu'),
				]
    );
    register_rest_route( $this->namespace, '/images', [
						'methods'   => 'GET',
						'callback'  => array( $this, 'images'),
				]
    );
    register_rest_route( $this->namespace, '/search', [
						'methods'   => 'GET',
						'callback'  => array( $this, 'search'),
				]
    );
	}

	public function previews_by_category($request) {
		$cat = $request['category'];

		$posts =  $this->get_previews($request, $cat);
		return array(
			'previews' => $posts,
			'category' => get_category($cat)->name
		);
	}

	public function previews($request) {
		return $this->get_previews($request, NULL);
	}

	public function get_previews($request, $cat) {
		$page = $request->get_query_params()['page'];

		$args = [
			'post_per_page' => self::PAGE_SIZE,
			'cat' => $cat,	
			'page' => empty($page) ? $page : 1,
		];

		return $this->get_data($args, fn($post) => new Model\Preview($post));
	}

	public function post($request) {
		$id = $request['id'];
		$post = get_post($id);

		if(empty($post)) {
			return new WP_REST_Response('No post found for ID \''.$id.'\'', 404);
		} else {
			return new Model\Post($post, true); 
		}
	}

	public function custom_header() {
		if(empty(get_custom_header()->url)) {
			return new WP_REST_Response('No custom header defined', 404);
		} else {
			wp_redirect(get_custom_header()->url);
			exit();
		}
	}

	public function menu() {
		$menus = [];
		foreach(get_nav_menu_locations() as $location => $id) {
			$items = [];
			foreach(wp_get_nav_menu_items($id) as $item) {
				$items += [$item->title => $item->url];
			}
			$menus += [$location => $items];
		}
	
		return $menus;
	}

	public function images() {
		$args = [
			'posts_per_page'   => -1,
			'post_type' => 'attachment',
			'post_mime_type' => 'image',
			// Mandatory for wordpress to return anything
			'post_status' => 'any',
		];

		return $this->get_data($args, fn($post) => new Model\Image($post));
	}

	public function search($request) {
		$q = $request->get_query_params()['q'];

		$args = [
			'post_type' => 'post',
			's' => $q,
		];

		$posts =   $this->get_data($args, fn($post) => new Model\Preview($post));
		return array(
			'previews' => $posts,
			'query' => $q
		);
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
