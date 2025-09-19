angular.module('joiasApp', [])
  .controller('LinksController', function($scope, $timeout) {
    $scope.links = {
      whatsapp: 'https://wa.me/message/TJSQPN7VNLJ5J1 ',
      catalogo: 'https://www.whatsapp.com/catalog/558588131371/?app_absent=0',
      localizacao: 'https://maps.app.goo.gl/DDWY3Y9zpu19zH3f7',
      produto: 'https://www.whatsapp.com/catalog/558588131371/?app_absent=0',
      // avaliacaonogoogle: 'https://seusite.com/avaliacaonogoogle'
    };

    // $scope.redesSociais = [
    //   { nome: 'Instagram', link: 'https://instagram.com/sualoja' },
    //   { nome: 'Facebook', link: 'https://facebook.com/sualoja' },
    //   { nome: 'TikTok', link: 'https://tiktok.com/@sualoja' }
    // ];

    $scope.clientes = [
      { foto: 'img/cliente1.png' },
      { foto: 'img/cliente2.png' },
      { foto: 'img/cliente3.png' }
    ];
    

    // ESTA É A FUNÇÃO QUE FAZ O BOTÃO FUNCIONAR
    $scope.delayedRedirect = function(url, $event) {
      const el = $event.currentTarget;
      el.classList.add('clicked');

      $timeout(function () {
        el.classList.remove('clicked');
        window.open(url, '_blank');
      }, 200); // tempo do toque
    };
  });
