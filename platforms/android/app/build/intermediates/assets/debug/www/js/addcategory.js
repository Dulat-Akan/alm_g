
//module category



var img = localStorage.getItem("baseurlimg");

  angular.
  module('angularApp').
  component('addCategory', {
    templateUrl:'js/addcategory/addcategorytemplate.html',
    controller: function AngularListController($scope) {
      this.obs = [
        {
          name: 'Недвижимость',
          src: img + 'nedv.jpg',
        }, {
          name: 'Авто и мото',
          src:img + 'cars.jpg',
        }, {
          name: 'Работа',
          src:img + 'job.jpg',
        }, {
          name: 'Электроника',
          src:img + 'electronic.jpg',
        },{
          name: 'Медицина',
          src:img + 'medical.jpg',
        }, {
          name: 'Салоны красоты',
          src:img + 'salon_krasoti.jpg',
        }, {
          name: 'Мода',
          src:img + 'moda.jpg',
        }, {
          name: 'кафе,караоке,ночные клубы',
          src:img + 'otdih.jpg',
        }, {
          name: 'Услуги и обслуживание',
          src:img + 'obsluzh.jpeg',
        }, {
          name: 'Банки Коммерческие организации',
          src:img + 'bank.jpg',
        }, {
          name: 'Компании,бизнес',
          src:img + 'biznes.jpg',
        },{
          name: 'Личные вещи',
          src:img + 'clothes.jpg',
        }, {
          name: 'Спортивные товары',
          src:img + 'sports.jpg',
        }, {
          name: 'Для детей',
          src:img + 'dlyadetei.jpg',
        }, {
          name: 'Животным',
          src:img + 'zhivotnie.jpg',
        }, {
          name: 'Для дома и дачи',
          src:img + 'domsad.jpg',
        }, {
          name: 'Хобби и игрушки',
          src:img + 'hobby.jpeg',
        }, {
          name: 'Изделия выполненные вручную',
          src:img + 'ruchnie_izdel.jpg',
        },
      ];

      $scope.myclick = function(categoryname){


        var formData2 = myApp.form.convertToData('#form_to_submit');


        for (newkey in formData2) {

                                $('[name = '+ newkey +']').val("");

                            }

        //default
        defaultobs = [
        {
          name: 'Недвижимость',
          src: img + 'nedv.jpg',
        }, {
          name: 'Авто и мото',
          src:img + 'cars.jpg',
        }, {
          name: 'Работа',
          src:img + 'job.jpg',
        }, {
          name: 'Электроника',
          src:img + 'electronic.jpg',
        },{
          name: 'Медицина',
          src:img + 'medical.jpg',
        }, {
          name: 'Салоны красоты',
          src:img + 'salon_krasoti.jpg',
        }, {
          name: 'Мода',
          src:img + 'moda.jpg',
        }, {
          name: 'кафе,караоке,ночные клубы',
          src:img + 'otdih.jpg',
        }, {
          name: 'Услуги и обслуживание',
          src:img + 'obsluzh.jpeg',
        }, {
          name: 'Банки Коммерческие организации',
          src:img + 'bank.jpg',
        }, {
          name: 'Компании,бизнес',
          src:img + 'biznes.jpg',
        },{
          name: 'Личные вещи',
          src:img + 'clothes.jpg',
        }, {
          name: 'Спортивные товары',
          src:img + 'sports.jpg',
        }, {
          name: 'Для детей',
          src:img + 'dlyadetei.jpg',
        }, {
          name: 'Животным',
          src:img + 'zhivotnie.jpg',
        }, {
          name: 'Для дома и дачи',
          src:img + 'domsad.jpg',
        }, {
          name: 'Хобби и игрушки',
          src:img + 'hobby.jpeg',
        }, {
          name: 'Изделия выполненные вручную',
          src:img + 'ruchnie_izdel.jpg',
        },
      ];
        //default

        //arrays
                    newobs = [
                          {
                            name: 'Продать',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сдать',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Купить',
                            src:img + 'strelka.png',
                          },{
                            name: 'Снять',
                            src:img + 'strelka.png',
                          },{
                            name: 'Обменять',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs2 = [
                          {
                            name: 'квартиру',
                            src: img + 'strelka.png',
                          }, {
                            name: 'общежитие',
                            src:img + 'strelka.png',
                          }, {
                            name: 'комнату',
                            src:img + 'strelka.png',
                          },{
                            name: 'времянку',
                            src:img + 'strelka.png',
                          },{
                            name: 'место в подселение',
                            src:img + 'strelka.png',
                          },{
                            name: 'дом',
                            src:img + 'strelka.png',
                          },{
                            name: 'дачу',
                            src: img + 'strelka.png',
                          }, {
                            name: 'участок',
                            src:img + 'strelka.png',
                          }, {
                            name: 'офис',
                            src:img + 'strelka.png',
                          },{
                            name: 'помещение',
                            src:img + 'strelka.png',
                          },{
                            name: 'здание',
                            src:img + 'strelka.png',
                          },{
                            name: 'магазин',
                            src: img + 'strelka.png',
                          }, {
                            name: 'бутик',
                            src:img + 'strelka.png',
                          }, {
                            name: 'промбазу',
                            src:img + 'strelka.png',
                          },{
                            name: 'склад',
                            src:img + 'strelka.png',
                          },{
                            name: 'прочую недвижимость',
                            src:img + 'strelka.png',
                          },
                        ];
        //arrays



        //1 level nedvizhimost

        switch (categoryname) {
            case 'Недвижимость':

                        $scope.$ctrl.obs = newobs;

                        localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
//level2
              break;
//level3
          }


          for(var ii = 0;ii < newobs.length;ii++){

              if(categoryname == newobs[ii].name){
                  localStorage.setItem("level2",categoryname);
                  $scope.$ctrl.obs = newobs2;
              }
          }

          for(var j = 0;j < newobs2.length;j++){

              if(categoryname == newobs2[j].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;

                  router.navigate({ name: 'add' });myApp.popup.close();
              }

          }
          //level3
          //1 level nedvizhimost

            //arrays avto i moto

                    newobs3 = [
                          {
                            name: 'продать машину',
                            src: img + 'strelka.png',
                          }, {
                            name: 'спецтехника',
                            src:img + 'strelka.png',
                          }, {
                            name: 'запчасти',
                            src:img + 'strelka.png',
                          },{
                            name: 'услуги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочее',
                            src:img + 'strelka.png',
                          }
                        ];

                        newobs4 = [
                          {
                            name: 'легковая с пробегом',
                            src: img + 'strelka.png',
                          }, {
                            name: 'легковая новая',
                            src:img + 'strelka.png',
                          }, {
                            name: 'легковая с автосалона',
                            src:img + 'strelka.png',
                          },{
                            name: 'легковая из зарубежа',
                            src:img + 'strelka.png',
                          },{
                            name: 'легковая на заказ',
                            src:img + 'strelka.png',
                          },{
                            name: 'мотоциклы',
                            src:img + 'strelka.png',
                          },{
                            name: 'квадроциклы',
                            src:img + 'strelka.png',
                          },{
                            name: 'катера и лодки',
                            src:img + 'strelka.png',
                          },{
                            name: 'другие машины',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs5 = [
                          {
                            name: 'Спецтехника,Автобусы и др.',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аренда',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Продавцы спецтехники',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs6 = [
                          {
                            name: 'Продажа запчастей',
                            src: img + 'strelka.png',
                          }, {
                            name: 'ищу запчасть',
                            src:img + 'strelka.png',
                          }, {
                            name: 'авторазбор',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Магазины запчастей',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Шины',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Диски',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Аксессуары и мультимедиа',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Расходники',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Авто на запчасти',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs7 = [
                          {
                            name: 'Автозвук',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Автомойки',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Автострахование',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Автошколы',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Автоэлектрики',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Аэрография',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Вскрытие авто, изготовление ключей',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Грузоперевозки',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Замена масел, жидкостей',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ксенон',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Перетяжка салона, пошив чехлов',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Прокат, аренда',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт бамперов, автопластика',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт двигателя',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт КПП',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт кузова',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт радиаторов, кондиционеров',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ремонт ходовой',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Ремонт топливной системы',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Сигнализации',
                            src:img + 'strelka.png',
                          }, {
                            name: 'СТО, автосервисы',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Такси',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Тех. осмотр',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Тонировка',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Тюнинг',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Установка автостёкол',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Химчистка, полировка',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Хранение шин',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Чип-тюнинг',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Шумоизоляция',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Шиномонтаж',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Эвакуатор',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Другие',
                            src:img + 'strelka.png',
                          },
                        ];
        //arrays avto i moto

          //level2 Авто и мото
          switch (categoryname) {
            case 'Авто и мото':

                        $scope.$ctrl.obs = newobs3;

                        localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
//level2
              break;
            case 'продать машину':
              localStorage.setItem("level2",categoryname);
              $scope.$ctrl.obs = newobs4;
              break;
            case 'спецтехника':
              localStorage.setItem("level2",categoryname);
              $scope.$ctrl.obs = newobs5;
              break;
            case 'запчасти':
              $scope.$ctrl.obs = newobs6;
              localStorage.setItem("level2",categoryname);
              break;
            case 'услуги':
              $scope.$ctrl.obs = newobs7;
              localStorage.setItem("level2",categoryname);
              break;
            case 'Прочее':
              localStorage.setItem("level2",categoryname);
              $scope.$ctrl.obs = defaultobs;

              router.navigate({ name: 'add' });myApp.popup.close();
              break;
//level2


          }
          //level3 Авто и мото
          for (var i = 0;i < newobs4.length;i++) {

              if(categoryname == newobs4[i].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  router.navigate({ name: 'add' });myApp.popup.close();
              }
          }

          //level3 Авто и мото
          for(var t = 0;t < newobs5.length;t++){
              if(categoryname == newobs5[t].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  router.navigate({ name: 'add' });myApp.popup.close();
              }
          }

          for(var tt = 0;tt < newobs6.length;tt++){
              if(categoryname == newobs6[tt].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  router.navigate({ name: 'add' });myApp.popup.close();
              }
          }

          for(var ttt = 0;ttt < newobs7.length;ttt++){
              if(categoryname == newobs7[ttt].name){
                  localStorage.setItem("level3",categoryname);
                  $scope.$ctrl.obs = defaultobs;
                  router.navigate({ name: 'add' });myApp.popup.close();
              }
          }

          //level3 Авто и мото

          //job arrays
          newobs8 = [
                          {
                            name: 'Торговля, продажи -',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Финансы, банки, инвестиции -',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Транспорт, логистика - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Строительство, недвижимость - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Юриспруденция и бухгалтерия',
                            src:img + 'strelka.png',
                          },{
                            name: 'Охрана и безопасность - ',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Домашний персонал',
                            src:img + 'strelka.png',
                          },{
                            name: 'Красота, фитнес, спорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Туризм, гостиницы, рестораны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Образование, наука',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Культура, искусство, развлечения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Медицина, фармацевтика',
                            src:img + 'strelka.png',
                          },{
                            name: 'IT, компьютеры, связь',
                            src:img + 'strelka.png',
                          },{
                            name: 'Маркетинг и реклама',
                            src:img + 'strelka.png',
                          }, {
                            name: 'Производство, энергетика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Административный персонал',
                            src:img + 'strelka.png',
                          },{
                            name: 'Начало карьеры, студенты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рабочий персонал',
                            src:img + 'strelka.png',
                          },{
                            name: 'Автомобильный бизнес',
                            src:img + 'strelka.png',
                          },{
                            name: 'Добыча сырья',
                            src:img + 'strelka.png',
                          },{
                            name: 'Страхование',
                            src:img + 'strelka.png',
                          },{
                            name: 'Другие сферы деятельности',
                            src:img + 'strelka.png',
                          },
                        ];



                        newobsp0 = [
                          {
                            name: 'Вакансии. Торговля, продажи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Торговля, продажи',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp1 = [
                          {
                            name: 'Вакансии. Финансы, банки, инвестиции',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Финансы, банки, инвестиции',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp2 = [
                          {
                            name: 'Вакансии. Транспорт, логистика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Транспорт, логистика',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp3 = [
                          {
                            name: 'Вакансии. Строительство, недвижимость',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Строительство, недвижимость',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp4 = [
                          {
                            name: 'Вакансии. Юриспруденция и бухгалтерия',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Юриспруденция и бухгалтерия',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp5 = [
                          {
                            name: 'Вакансии. Охрана и безопасность',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Охрана и безопасность',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp6 = [
                          {
                            name: 'Вакансии. Домашний персонал',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Домашний персонал',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp7 = [
                          {
                            name: 'Вакансии. Красота, фитнес, спорт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Красота, фитнес, спорт',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp8 = [
                          {
                            name: 'Вакансии. Туризм, гостиницы, рестораны',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Туризм, гостиницы, рестораны',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp9 = [
                          {
                            name: 'Вакансии. Образование, наука',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Образование, наука',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp10 = [
                          {
                            name: 'Вакансии. Культура, искусство, развлечения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Культура, искусство, развлечения',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp11 = [
                          {
                            name: 'Вакансии. Медицина, фармацевтика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Медицина, фармацевтика',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp12 = [
                          {
                            name: 'Вакансии. IT, компьютеры, связь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. IT, компьютеры, связь',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp13 = [
                          {
                            name: 'Вакансии. Маркетинг и реклама',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Маркетинг и реклама',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp14 = [
                          {
                            name: 'Вакансии. Производство, энергетика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Производство, энергетика',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp15 = [
                          {
                            name: 'Вакансии. Административный персонал',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Административный персонал',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp16 = [
                          {
                            name: 'Вакансии. Начало карьеры, студенты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Начало карьеры, студенты',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp17 = [
                          {
                            name: 'Вакансии. Рабочий персонал',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Рабочий персонал',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp18 = [
                          {
                            name: 'Вакансии. Автомобильный бизнес',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Автомобильный бизнес',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp19 = [
                          {
                            name: 'Вакансии. Добыча сырья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Добыча сырья',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp20 = [
                          {
                            name: 'Вакансии. Страхование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Страхование',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobsp21 = [
                          {
                            name: 'Вакансии. Другие сферы деятельности',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Поиск работы. Другие сферы деятельности',
                            src:img + 'strelka.png',
                          },
                        ];

                        var arraypodcategory = [newobsp0,newobsp1,newobsp2,newobsp3,
                        newobsp4,newobsp5,newobsp6,newobsp7,newobsp8,newobsp9,newobsp10,newobsp11,
                        newobsp12,newobsp13,newobsp14,newobsp15,newobsp16,newobsp17,newobsp18,newobsp19,
                        newobsp20,newobsp21];

          //job arrays

          //job

          switch (categoryname) {
            case 'Работа':

                        $scope.$ctrl.obs = newobs8;

                        localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");

              break;

          }

          //job

          for(var p = 0;p < newobs8.length;p++){
              if(categoryname == newobs8[p].name){
                  $scope.$ctrl.obs = arraypodcategory[p];
                  localStorage.setItem("level2",categoryname);
              }
          }


          for(var o = 0;o < arraypodcategory.length;o++){
              for(var jj = 0;jj < arraypodcategory[o].length;jj++){
                  if(categoryname == arraypodcategory[o][jj].name){
                      localStorage.setItem("level3",categoryname);
                      $scope.$ctrl.obs = defaultobs;
                      router.navigate({ name: 'add' });myApp.popup.close();
                 }
              }

          }


           //electronika

           //arrays electronic
           newobs22 = [
                          {
                            name: 'компьютеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'бытовая техника',
                            src:img + 'strelka.png',
                          },{
                            name: 'фототехника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'телефоны',
                            src:img + 'strelka.png',
                          },{
                            name: 'ТВ и видео, аудио',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игровые приставки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электроника для Arduino',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Индивидуальный уход',
                            src:img + 'strelka.png',
                          },{
                            name: 'Оргтехника',
                            src:img + 'strelka.png',
                          },{
                            name: 'Климатическая техника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'GPS навигация',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электроника для авто',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Оптические приборы',
                            src:img + 'strelka.png',
                          },{
                            name: 'охранные системы - ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары и комплектующие',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электронные книги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая электроника',
                            src:img + 'strelka.png',
                          },
                        ];




                        newobs23 = [
                          {
                            name: 'веб камеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'внешние жесткие диски',
                            src:img + 'strelka.png',
                          },{
                            name: 'источники бесперебойного питания',
                            src: img + 'strelka.png',
                          }, {
                            name: 'карты памяти',
                            src:img + 'strelka.png',
                          },{
                            name: 'комплектующие для ноутбуков',
                            src: img + 'strelka.png',
                          }, {
                            name: 'комплектующие для пк',
                            src:img + 'strelka.png',
                          },{
                            name: 'манипуляторы и клавиатуры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Мониторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Настольные компьютеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ноутбуки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Програмное обеспечение',
                            src:img + 'strelka.png',
                          },{
                            name: 'Планшеты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сетевое оборудование',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сумки и чехлы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Флешки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие компьютерные товары',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs24 = [
                          {
                            name: 'вытяжки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'духовки',
                            src:img + 'strelka.png',
                          },{
                            name: 'кофеварки и кофемашины',
                            src: img + 'strelka.png',
                          }, {
                            name: 'мелкая кухонная техника',
                            src:img + 'strelka.png',
                          },{
                            name: 'микроволновые печи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'плиты',
                            src:img + 'strelka.png',
                          },{
                            name: 'посудомоечные машины',
                            src: img + 'strelka.png',
                          }, {
                            name: 'пылесосы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Стиральные машины',
                            src:img + 'strelka.png',
                          },{
                            name: 'утюги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фильтры и умягчители для воды',
                            src:img + 'strelka.png',
                          },{
                            name: 'Холодильники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Швейное оборудование',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрочайники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая бытовая техника',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs25 = [
                          {
                            name: 'Объективы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фотоаксессуары',
                            src:img + 'strelka.png',
                          },{
                            name: 'Фотоаппараты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фотовспышки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Студийное оборудование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Цифровые фоторамки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Штативы и моноподы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая фототехника',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs26 = [
                          {
                            name: 'Аксессуары для телефонов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Гарнитуры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Запасные части для телефонов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Карты оплаты и номера',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мобильные телефоны',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Радиотелефоны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рации',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Спортивные браслеты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Android(watch)',
                            src:img + 'strelka.png',
                          },{
                            name: 'ios(watch)',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие телефоны',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs27 = [
                          {
                            name: 'Домашние кинотеатры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аудио',
                            src:img + 'strelka.png',
                          },{
                            name: 'DVD и Blu-ray плееры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для видеокамер',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аксессуары для ТВ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для экшн-камер',
                            src:img + 'strelka.png',
                          },{
                            name: 'Видеокамеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Медиаплееры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Спутниковое и кабельное ТВ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Телевизоры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая ТВ и видеотехника',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs28 = [
                          {
                            name: 'Аксессуары для игровых приставок',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игровые приставки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Игры для приставок',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт приставок',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рули, джойстики, геймпады',
                            src: img + 'strelka.png',
                          },{
                            name: 'прошивка,unlock',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs29 = [
                          {
                            name: 'Электронные платы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'электродвигатели',
                            src:img + 'strelka.png',
                          },{
                            name: 'прочая электроника',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs30 = [
                          {
                            name: 'Бритвы и триммеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бытовые медицинские приборы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Массажеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Напольные весы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фены и приборы для укладки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрические зубные щетки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Эпиляторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочее для индивидуального ухода',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs31 = [
                          {
                            name: 'Копиры и МФУ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ламинаторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мини АТС',
                            src: img + 'strelka.png',
                          },{
                            name: 'Принтеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Проекторы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Проекционные экраны',
                            src: img + 'strelka.png',
                          },{
                            name: 'Расходные материалы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сканеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочая офисная техника',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs32 = [
                          {
                            name: 'Вентиляторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Водонагреватели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ионизаторы воздуха',
                            src: img + 'strelka.png',
                          },{
                            name: 'Кондиционеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Обогреватели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Осушители воздуха',
                            src: img + 'strelka.png',
                          },{
                            name: 'Очистители и увлажнители воздуха',
                            src:img + 'strelka.png',
                          },{
                            name: 'Тепловые пушки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Электрокамины',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочее климатическое оборудование',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs33 = [
                          {
                            name: 'GPS-навигаторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'GPS-трекеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Карты и программы для GPS',
                            src: img + 'strelka.png',
                          },{
                            name: 'другие приборы GPS',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs34 = [
                          {
                            name: 'Автоакустика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Автомагнитолы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Автоусилители',
                            src: img + 'strelka.png',
                          },{
                            name: 'Автомобильные телевизоры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Видеорегистраторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бортовые компьютеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Камеры заднего вида',
                            src: img + 'strelka.png',
                          },{
                            name: 'Радар-детекторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Универсальные зарядные устройства',
                            src: img + 'strelka.png',
                          },{
                            name: 'Устройства громкой связи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'FM-трансмиттеры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочая электроника для авто',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs35 = [
                          {
                            name: 'Бинокли и зрительные трубы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Микроскопы и лупы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Приборы ночного видения',
                            src: img + 'strelka.png',
                          },{
                            name: 'Телескопы',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs36 = [
                          {
                            name: 'Датчики, извещатели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Домофоны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Камеры видеонаблюдения',
                            src: img + 'strelka.png',
                          },{
                            name: 'Охранные системы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сигнализации',
                            src: img + 'strelka.png',
                          },
                        ];




           //arrays electronic
            var podcategoryar = [newobs23,newobs24,newobs25,newobs26,newobs27,newobs28,newobs29,newobs30,newobs31,
            newobs32,newobs33,newobs34,newobs35,newobs36];
           //

           switch (categoryname) {
            case 'Электроника':

                        $scope.$ctrl.obs = newobs22;

                        localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");

              break;

          }

          for(var u = 0;u < newobs22.length;u++){
              if(categoryname == newobs22[u].name){
                  $scope.$ctrl.obs = podcategoryar[u];
                  localStorage.setItem("level2",categoryname);
              }
          }

          for(var y = 0;y < podcategoryar.length;y++){
              for(var yy = 0;yy < podcategoryar[y].length;yy++){
                  if(categoryname == podcategoryar[y][yy].name){
                      localStorage.setItem("level3",categoryname);
                      $scope.$ctrl.obs = defaultobs;
                      app.popup.close();
                  }
              }
          }


           //electronika
                //medical



                switch (categoryname) {
                case 'Медицина':


                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();



                  break;

                }

                //medical


                //salon


                switch (categoryname) {
                case 'Салоны красоты':

                            //$scope.$ctrl.obs = newobs22;
                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();



                  break;

                }

                //salon


                //moda


                switch (categoryname) {
                case 'Мода':

                            //$scope.$ctrl.obs = newobs22;
                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();



                  break;

                }

                //moda

                //moda


                switch (categoryname) {
                case 'кафе,караоке,ночные клубы':

                            //$scope.$ctrl.obs = newobs22;
                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();



                  break;

                }

                //moda

                //kafe




                //kafe


                //uslugi

                //arrays

                newobs39 = [
                          {
                            name: 'Строительство и ремонт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Образование, курсы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ремонт и обслуживание техники',
                            src: img + 'strelka.png',
                          },{
                            name: 'Юридические услуги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат товаров',
                            src:img + 'strelka.png',
                          },{
                            name: 'Спорт',
                            src: img + 'strelka.png',
                          },{
                            name: 'Красота и здоровье',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Информационные технологии - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аренда оборудования',
                            src: img + 'strelka.png',
                          },{
                            name: 'Безопасность, детективы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бухгалтерские и аудиторские услуги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Риэлторские услуги',
                            src: img + 'strelka.png',
                          },{
                            name: 'Уборка, химчистка, стирка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дизайн, архитектура, ландшафт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Грузоперевозки, вывоз мусора',
                            src: img + 'strelka.png',
                          },{
                            name: 'Изготовление, сборка, ремонт мебели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Набор текста',
                            src:img + 'strelka.png',
                          },{
                            name: 'Няни',
                            src: img + 'strelka.png',
                          },{
                            name: 'Перевод',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Пошив и ремонт одежды',
                            src:img + 'strelka.png',
                          },{
                            name: 'Праздники и мероприятия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Редактирование, вычитка текстов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Реклама и полиграфия',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сиделки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сопровождение иностранцев',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Транспорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Уборка',
                            src: img + 'strelka.png',
                          },{
                            name: 'Фото и видео-съемка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие услуги',
                            src:img + 'strelka.png',
                          },
                        ];

                //arrays

                //podcategory arrays
                newobs40 = [
                          {
                            name: 'Вентиляция, кондиционирование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дизайн, архитектура',
                            src:img + 'strelka.png',
                          },{
                            name: 'Готовые конструкции',
                            src: img + 'strelka.png',
                          },{
                            name: 'Изготовление мебели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Монтажные работы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Окна, двери, балконы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Отделка, ремонт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт помещений',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сантехника',
                            src: img + 'strelka.png',
                          },{
                            name: 'Столярные работы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Строительные услуги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрика',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие строительные услуги',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs41 = [
                          {
                            name: 'Вождение',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дошкольное обучение',
                            src:img + 'strelka.png',
                          },{
                            name: 'Иностранные языки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Искусство',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Курсы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Образование за рубежом',
                            src: img + 'strelka.png',
                          },{
                            name: 'Репетиторы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Семинары, тренинги',
                            src:img + 'strelka.png',
                          },{
                            name: 'Уроки музыки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие образовательные услуги',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs42 = [
                          {
                            name: 'Ремонт и установка бытовой техники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт компьютерной техники',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ремонт и установка прочей техники',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs43 = [
                          {
                            name: 'Адвокаты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Нотариусы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Юридические консультации',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие юридические услуги',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs44 = [
                          {
                            name: 'Прокат велосипедов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат кальянов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прокат музыкального оборудования',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат оборудования',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат платьев и костюмов',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат свадебных товаров',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прокат спортивных товаров',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат строительных инструментов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат туристического снаряжения',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прокат электроники',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прокат прочих товаров',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs45 = [
                          {
                            name: 'Спортивные залы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Спортивные секции',
                            src:img + 'strelka.png',
                          },{
                            name: 'Тренеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие спортивные услуги',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs46 = [
                          {
                            name: 'Косметология',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Макияж, визаж',
                            src:img + 'strelka.png',
                          },{
                            name: 'Маникюр, педикюр',
                            src: img + 'strelka.png',
                          },{
                            name: 'Массаж',
                            src: img + 'strelka.png',
                          },{
                            name: 'Медицинские услуги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Наращивание ногтей',
                            src:img + 'strelka.png',
                          },{
                            name: 'Парикмахерские услуги',
                            src: img + 'strelka.png',
                          },{
                            name: 'Психология',
                            src: img + 'strelka.png',
                          },{
                            name: 'Тату, боди-арт, пирсинг',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Эпиляция и депиляция',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие услуги для красоты и здоровья',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs47 = [
                          {
                            name: 'Компьютерная помощь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Продвижение в социальных сетях',
                            src:img + 'strelka.png',
                          },{
                            name: 'Услуги разработчиков',
                            src:img + 'strelka.png',
                          },{
                            name: 'Продвижение сайтов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Создание сайтов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Телефония, связь, интернет',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие ИТ услуги',
                            src:img + 'strelka.png',
                          },
                        ];


                        var uslugiarr = [newobs40,newobs41,newobs42,newobs43,newobs44,newobs45,newobs46,newobs47];

                //podcategory arrays


                switch (categoryname) {
                case 'Услуги и обслуживание':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs39;

                  break;

                }

                for(var ph = 0;ph < newobs39.length;ph++){
                    if(categoryname == newobs39[ph].name){

                        if(ph <= 7){
                          $scope.$ctrl.obs = uslugiarr[ph];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          router.navigate({ name: 'add' });myApp.popup.close();
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var oh = 0;oh < uslugiarr.length;oh++){
                    for(var jjh = 0;jjh < uslugiarr[oh].length;jjh++){
                        if(categoryname == uslugiarr[oh][jjh].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();
                       }
                    }

                }

                //uslugi
           //

           //bank and commerce


           switch (categoryname) {
                case 'Банки Коммерческие организации':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();

                  break;

                }
           //bank and commerce

           //company and biziness


           switch (categoryname) {
                case 'Компании,бизнес':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();

                  break;

                }
           //company and biziness


           ///company and biziness

           //veshi arrays

           newobs48 = [
                          {
                            name: 'Одежда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Обувь',
                            src:img + 'strelka.png',
                          },{
                            name: 'Для свадьбы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аксессуары',
                            src: img + 'strelka.png',
                          },{
                            name: 'Подарки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Товары для красоты и здоровья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Часы - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Другие личные вещи',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs49 = [
                          {
                            name: 'Головные уборы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Женское белье и купальники',
                            src:img + 'strelka.png',
                          },{
                            name: 'Женская одежда',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мужская одежда',
                            src: img + 'strelka.png',
                          },{
                            name: 'Одежда для беременных',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs50 = [
                          {
                            name: 'Женская обувь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Мужская обувь',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs51 = [
                          {
                            name: 'Свадебные аксессуары',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Свадебные платья',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs52 = [
                          {
                            name: 'Бижутерия',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сумки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Ювелирные украшения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие аксессуары',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs53 = [
                          {
                            name: 'Подарочные сертификаты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сувениры, подарки',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs54 = [
                          {
                            name: 'Косметика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Парфюмерия',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs55 = [
                          {
                            name: 'Карманные часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Командирские часы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сувенирные часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Наручные женские часы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Наручные мужские часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Настенные часы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Настольные часы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Напольные часы',
                            src:img + 'strelka.png',
                          },
                        ];

                        var veshiarr = [newobs49,newobs50,newobs51,newobs52,newobs53,newobs54,newobs55];
           //veshi arrays


           switch (categoryname) {
                case 'Личные вещи':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs48;

                  break;

                }

           for(var phd = 0;phd < newobs48.length;phd++){
                    if(categoryname == newobs48[phd].name){

                        if(phd <= 6){
                          $scope.$ctrl.obs = veshiarr[phd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          router.navigate({ name: 'add' });myApp.popup.close();
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohd = 0;ohd < veshiarr.length;ohd++){
                    for(var jjhd = 0;jjhd < veshiarr[ohd].length;jjhd++){
                        if(categoryname == veshiarr[ohd][jjhd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();
                       }
                    }

                }
           //company and biziness

           //sport tovari
           switch (categoryname) {
                case 'Спортивные товары':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();

                  break;

                }
           //sport tovari

           //dlya detei

           //arrays

           newobs56 = [
                          {
                            name: 'Детская одежда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Детская обувь',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детская мебель - ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Автокресла',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детские велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Детский транспорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детская литература',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игрушки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Коляски',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Товары для новорожденных',
                            src:img + 'strelka.png',
                          },{
                            name: 'Школьные товары',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие детские товары',
                            src:img + 'strelka.png',
                          },
                        ];

                        //arrays

                newobs37 = [
                          {
                            name: 'Одежда для девочек',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Одежда для мальчиков',
                            src:img + 'strelka.png',
                          },{
                            name: 'Одежда для новорожденных',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs38 = [
                          {
                            name: 'Обувь для девочек',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Обувь для мальчиков',
                            src:img + 'strelka.png',
                          },
                        ];

                //arrays

                        newobs57 = [
                          {
                            name: 'Бескаркасная мебель',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Детские гарнитуры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Колыбели и люльки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Комоды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Кроватки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Пеленальные столики',
                            src: img + 'strelka.png',
                          },{
                            name: 'Столы и стульчики для кормления',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ходунки и прыгунки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Шведские стенки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другая детская мебель',
                            src: img + 'strelka.png',
                          },
                        ];




           var childrenarrays = [newobs37,newobs38,newobs57];

           switch (categoryname) {
                case 'Для детей':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs56;


                  break;

                }

                for(var phdd = 0;phdd < newobs56.length;phdd++){
                    if(categoryname == newobs56[phdd].name){

                        if(phdd <= 2){
                          $scope.$ctrl.obs = childrenarrays[phdd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          router.navigate({ name: 'add' });myApp.popup.close();
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohdd = 0;ohdd < childrenarrays.length;ohdd++){
                    for(var jjhdd = 0;jjhdd < childrenarrays[ohdd].length;jjhdd++){
                        if(categoryname == childrenarrays[ohdd][jjhdd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();
                       }
                    }

                }
           //dlya detei

           //arrays

           newobs58 = [
                          {
                            name: 'Услуги для животных',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бюро находок - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Аквариумные рыбки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Грызуны',
                            src:img + 'strelka.png',
                          },{
                            name: 'Кошки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Птицы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Рептилии',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сельхоз животные',
                            src:img + 'strelka.png',
                          },{
                            name: 'Собаки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Товары для животных',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Экзотические животные',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs59 = [
                          {
                            name: 'Ветеринария',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Выгул',
                            src:img + 'strelka.png',
                          },{
                            name: 'Дрессировка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Зоогостиницы, передержка',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Стрижка',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие услуги для животных',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs60 = [
                          {
                            name: 'Найдены',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Утеряны',
                            src:img + 'strelka.png',
                          },
                        ];
           //arrays

           var arraysanimals = [newobs59,newobs60];

           switch (categoryname) {
                case 'Животным':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs58;


                  break;

                }


                for(var phddd = 0;phddd < newobs58.length;phddd++){
                    if(categoryname == newobs58[phddd].name){

                        if(phddd <= 1){
                          $scope.$ctrl.obs = arraysanimals[phddd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          router.navigate({ name: 'add' });myApp.popup.close();
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohddd = 0;ohddd < arraysanimals.length;ohddd++){
                    for(var jjhddd = 0;jjhddd < arraysanimals[ohddd].length;jjhddd++){
                        if(categoryname == arraysanimals[ohddd][jjhddd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();
                       }
                    }

                }

                //dlya doma i dachi
                //arrays
                newobs61 = [
                          {
                            name: 'Мебель и интерьер',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ремонт и строительство',
                            src:img + 'strelka.png',
                          },{
                            name: 'Инструменты и инвентарь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Растения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Домашний текстиль',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бытовая химия - ',
                            src:img + 'strelka.png',
                          },{
                            name: 'Посуда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие товары для дома и дачи',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs62 = [
                          {
                            name: 'Диваны и кресла',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Компьютерные кресла',
                            src:img + 'strelka.png',
                          },{
                            name: 'Компьютерные столы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Кровати и матрасы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Кухонные гарнитуры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Мебель для ванной',
                            src:img + 'strelka.png',
                          },{
                            name: 'Освещение',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Подставки и тумбы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Предметы интерьера',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Спальные гарнитуры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Столы и стулья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Текстиль и ковры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Шкафы и комоды',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочая мебель и предметы интерьера',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs63 = [
                          {
                            name: 'Двери',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Окна и балконы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Камины и обогреватели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Потолки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сауна и баня',
                            src:img + 'strelka.png',
                          },{
                            name: 'Сантехника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Стройматериалы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Электрика',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочие товары для строительства',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs64 = [
                          {
                            name: 'Садовая техника',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Садовые инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Прочие инструменты и инвентарь',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs65 = [
                          {
                            name: 'Комнатные растения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Садовые растения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Удобрения и грунт',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs66 = [
                          {
                            name: 'Комплекты постельного белья',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Матрасы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Наволочки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Одеяла',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Подушки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Полотенца',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Пледы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Простыни',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs67 = [
                          {
                            name: 'Все для стирки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Все для уборки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Моющие средства',
                            src: img + 'strelka.png',
                          },{
                            name: 'Чистящие средства',
                            src: img + 'strelka.png',
                          },
                        ];


                        var domisadarrays = [newobs62,newobs63,newobs64,newobs65,newobs66,newobs67];
                //arrays

                switch (categoryname) {
                case 'Для дома и дачи':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs61;


                  break;

                }



                for(var phdddd = 0;phdddd < newobs61.length;phdddd++){
                    if(categoryname == newobs61[phdddd].name){

                        if(phdddd <= 5){
                          $scope.$ctrl.obs = domisadarrays[phdddd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          router.navigate({ name: 'add' });myApp.popup.close();
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohdddd = 0;ohdddd < domisadarrays.length;ohdddd++){
                    for(var jjhdddd = 0;jjhdddd < domisadarrays[ohdddd].length;jjhdddd++){
                        if(categoryname == domisadarrays[ohdddd][jjhdddd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();
                       }
                    }

                }

                //Хобби и игрушки

                //arrays hobby
                newobs68 = [
                          {
                            name: 'Коллекционирование',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Музыкальные инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Спорт и отдых',
                            src: img + 'strelka.png',
                          },{
                            name: 'Книги, журналы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Билеты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Путешествия',
                            src: img + 'strelka.png',
                          },{
                            name: 'USB, CD, DVD, пластинки -',
                            src: img + 'strelka.png',
                          },{
                            name: 'Настольные игры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Развивающие игрушки, игры',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs69 = [
                          {
                            name: 'Антиквариат',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бонистика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Искусство',
                            src: img + 'strelka.png',
                          },{
                            name: 'Модели',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Нумизматика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Филокартия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Фарфор, Керамика, Стекло, Хрусталь',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Фалеристика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Филателия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие предметы для коллекционирования',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs70 = [
                          {
                            name: 'Аккордеоны, гармони, баяны',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для музыкальных инструментов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Гитары и другие струнные',
                            src: img + 'strelka.png',
                          },{
                            name: 'Духовые инструменты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Оборудование для студии и концертов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Пианино и другие клавишные',
                            src: img + 'strelka.png',
                          },{
                            name: 'Скрипки и другие смычковые',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Ударные инструменты',
                            src:img + 'strelka.png',
                          },{
                            name: 'Этнические (национальные) инструменты',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs71 = [
                          {
                            name: 'Альпинизм',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Бильярд',
                            src:img + 'strelka.png',
                          },{
                            name: 'Боулинг',
                            src: img + 'strelka.png',
                          },{
                            name: 'Водный спорт',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Дайвинг',
                            src:img + 'strelka.png',
                          },{
                            name: 'Игры с мячом',
                            src: img + 'strelka.png',
                          },{
                            name: 'Единоборства',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Лыжный / горнолыжный спорт',
                            src:img + 'strelka.png',
                          },{
                            name: 'Охота и рыбалка',
                            src: img + 'strelka.png',
                          },{
                            name: 'Пейнтбол',
                            src: img + 'strelka.png',
                          },{
                            name: 'Ролики',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сноубординг',
                            src:img + 'strelka.png',
                          },{
                            name: 'Скейтборды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Страйкбол',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Теннис, бадминтон, пинг-понг',
                            src:img + 'strelka.png',
                          },{
                            name: 'Туризм',
                            src: img + 'strelka.png',
                          },{
                            name: 'Фитнес и тренажеры',
                            src: img + 'strelka.png',
                          },{
                            name: 'Хоккей',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Прочее для спорта и отдыха',
                            src:img + 'strelka.png',
                          },
                        ];


                        newobs72 = [
                          {
                            name: 'Журналы, газеты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Календари, постеры',
                            src:img + 'strelka.png',
                          },{
                            name: 'Книги',
                            src: img + 'strelka.png',
                          },{
                            name: 'Учебная литература',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs73 = [
                          {
                            name: 'BMX велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Аксессуары для велосипедов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Двухподвесные велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Горные велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Городские велосипеды',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Запчасти для велосипедов',
                            src:img + 'strelka.png',
                          },{
                            name: 'Трековые велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Шоссейные велосипеды',
                            src: img + 'strelka.png',
                          },{
                            name: 'Электровелосипеды',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs74 = [
                          {
                            name: 'Спортивные мероприятия',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Купоны и абонементы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Детские мероприятия',
                            src: img + 'strelka.png',
                          },{
                            name: 'Концерты',
                            src: img + 'strelka.png',
                          },{
                            name: 'Бизнес',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Путешествия',
                            src:img + 'strelka.png',
                          },{
                            name: 'Театр, опера, балет',
                            src: img + 'strelka.png',
                          },{
                            name: 'Цирк, кино',
                            src: img + 'strelka.png',
                          },{
                            name: 'Выставки, фестивали',
                            src: img + 'strelka.png',
                          },{
                            name: 'Прочие билеты',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs75 = [
                          {
                            name: 'Поиск попутчиков',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Товары для кемпинга',
                            src:img + 'strelka.png',
                          },{
                            name: 'Туры и путевки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Услуги для туристов',
                            src: img + 'strelka.png',
                          },{
                            name: 'Эмиграция',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs76 = [
                          {
                            name: 'Аудиокниги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Видео',
                            src:img + 'strelka.png',
                          },{
                            name: 'Музыка',
                            src: img + 'strelka.png',
                          },{
                            name: 'USB накопители',
                            src: img + 'strelka.png',
                          },
                        ];

                      var arrayshobby = [newobs69,newobs70,newobs71,newobs72,newobs73,newobs74,newobs75,newobs76];

                switch (categoryname) {
                case 'Хобби и игрушки':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs68;


                  break;

                }


                for(var phddddd = 0;phddddd < newobs68.length;phddddd++){
                    if(categoryname == newobs68[phddddd].name){

                        if(phddddd <= 7){
                          $scope.$ctrl.obs = arrayshobby[phddddd];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          router.navigate({ name: 'add' });myApp.popup.close();
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohddddd = 0;ohddddd < arrayshobby.length;ohddddd++){
                    for(var jjhddddd = 0;jjhddddd < arrayshobby[ohddddd].length;jjhddddd++){
                        if(categoryname == arrayshobby[ohddddd][jjhddddd].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();
                       }
                    }

                }
                //Хобби и игрушки

                //arrays

                newobs77 = [
                          {
                            name: 'Украшения',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Игрушки',
                            src:img + 'strelka.png',
                          },{
                            name: 'Дом, интерьер',
                            src: img + 'strelka.png',
                          },{
                            name: 'Одежда, обувь',
                            src: img + 'strelka.png',
                          },{
                            name: 'Казахские национальные изделия - ',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Для домашних животных',
                            src:img + 'strelka.png',
                          },{
                            name: 'Живопись',
                            src: img + 'strelka.png',
                          },{
                            name: 'Косметика, мыло',
                            src: img + 'strelka.png',
                          },{
                            name: 'Мастер-классы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Материалы для творчества',
                            src:img + 'strelka.png',
                          },{
                            name: 'Открытки, канцтовары',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сувениры ручной работы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сумки, аксессуары',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Цветы, флористика',
                            src:img + 'strelka.png',
                          },{
                            name: 'Другие товары ручной работы',
                            src: img + 'strelka.png',
                          },
                        ];


                        newobs78 = [
                          {
                            name: 'Браслеты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Броши',
                            src:img + 'strelka.png',
                          },{
                            name: 'Заколки, обручи',
                            src: img + 'strelka.png',
                          },{
                            name: 'Колье, бусы',
                            src: img + 'strelka.png',
                          },{
                            name: 'Серьги',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Другие украшения',
                            src:img + 'strelka.png',
                          },
                        ];

                        newobs79 = [
                          {
                            name: 'Деревянные игрушки',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Куклы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мягкие игрушки',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие игрушки',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs80 = [
                          {
                            name: 'Кухня и посуда',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Предметы мебели',
                            src:img + 'strelka.png',
                          },{
                            name: 'Элементы интерьера и декор',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие предметы интерьера',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs81 = [
                          {
                            name: 'Детская одежда и обувь ручной работы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Женская одежда и обувь ручной работы',
                            src:img + 'strelka.png',
                          },{
                            name: 'Мужская одежда и обувь ручной работы',
                            src: img + 'strelka.png',
                          },
                        ];

                        newobs82 = [
                          {
                            name: 'Головные уборы и шарфы',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Изделия из войлока',
                            src:img + 'strelka.png',
                          },{
                            name: 'Изделия из дерева',
                            src: img + 'strelka.png',
                          },{
                            name: 'Изделия из кожи',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Изделия из металла',
                            src:img + 'strelka.png',
                          },{
                            name: 'Казахская национальная одежда и обувь',
                            src: img + 'strelka.png',
                          },{
                            name: 'Казахские музыкальные инструменты',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Казахские национальные украшения',
                            src:img + 'strelka.png',
                          },{
                            name: 'Национальная посуда',
                            src: img + 'strelka.png',
                          },{
                            name: 'Сувениры',
                            src: img + 'strelka.png',
                          }, {
                            name: 'Сумки, ремни, аксессуары',
                            src:img + 'strelka.png',
                          },{
                            name: 'Тойбастар, коржын, приданое',
                            src: img + 'strelka.png',
                          },{
                            name: 'Другие национальные изделия',
                            src: img + 'strelka.png',
                          },
                        ];

                //arrays

                  var arraysruch = [newobs78,newobs79,newobs80,newobs81,newobs82];

                switch (categoryname) {
                case 'Изделия выполненные вручную':

                            localStorage.setItem("level1",categoryname);
                        localStorage.removeItem("level2");
                        localStorage.removeItem("level3");
                            $scope.$ctrl.obs = newobs77;


                  break;

                }

                for(var phddddda = 0;phddddda < newobs77.length;phddddda++){
                    if(categoryname == newobs77[phddddda].name){

                        if(phddddda <= 4){
                          $scope.$ctrl.obs = arraysruch[phddddda];
                        }else{
                          $scope.$ctrl.obs = defaultobs;
                          router.navigate({ name: 'add' });myApp.popup.close();
                        }

                        localStorage.setItem("level2",categoryname);
                    }
                }


                for(var ohddddda = 0;ohddddda < arraysruch.length;ohddddda++){
                    for(var jjhddddda = 0;jjhddddda < arraysruch[ohddddda].length;jjhddddda++){
                        if(categoryname == arraysruch[ohddddda][jjhddddda].name){
                            localStorage.setItem("level3",categoryname);
                            $scope.$ctrl.obs = defaultobs;
                            router.navigate({ name: 'add' });myApp.popup.close();
                       }
                    }

                }




      };




    }


  });