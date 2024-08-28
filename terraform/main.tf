terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}

resource "docker_image" "nginx" {
  name = "nginx:latest"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.name
  name  = "meu-nginx"
  ports {
    internal = 80
    external = 8081  
  }
  volumes {
    container_path = "/etc/nginx/nginx.conf"
    host_path      = "${path.module}/nginx.conf"
  }
}
