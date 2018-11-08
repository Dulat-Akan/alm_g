$$(document).on('page:beforein', '.page[data-name="add"]', function (e) {

    $(".allhide").hide();


    localStorage.setItem("typezapchasti","0");

   // myApp.formDeleteData('form_to_submit');


  var level1 = localStorage.getItem("level1");
  var level2 = localStorage.getItem("level2");
  var level3 = localStorage.getItem("level3");

  console.log(level1 + " | " + level2 + " | " + level3);

  switch (level3) {
    //nedvizhimost
    case 'квартиру':

      $(".nedvhide").show(3000);

      break;

      case 'общежитие':

      $(".nedvhide").show(3000);

      break;

      case 'комнату':

      $(".nedvhide").show(3000);

      break;

      case 'времянку':

      $(".nedvhide").show(3000);

      break;

      case 'место в подселение':

      $(".nedvhide").show(3000);

      break;
      //nedvizhimost
      //dom
      case 'дом':

      $(".domhide").show(3000);

      break;

      case 'дачу':

      $(".dachahide").show(3000);

      break;

      case 'участок':

      $(".uchastokhide").show(3000);

      break;

      case 'офис':

      $(".ofishide").show(3000);

      break;


      case 'помещение':

      $(".pomeshhide").show(3000);

      break;

      case 'здание':

      $(".zdaniehide").show(3000);

      break;

      case 'магазин':

      $(".maghide").show(3000);

      break;

      case 'бутик':

      $(".maghide").show(3000);

      break;

      case 'промбазу':

      $(".maghide").show(3000);

      break;

      case 'склад':

      $(".maghide").show(3000);

      break;

      case 'прочую недвижимость':

      $(".maghide").show(3000);

      break;




      case 'Продажа запчастей':

       $(".zapchbuttons").show(3000);

      break;

      case 'ищу запчасть':

      $(".zapchbuttons").show(3000);

      $(".senaot").show(3000);

      break;

      case 'авторазбор':

       $(".zapchbuttons").show(3000);

      break;

      case 'Магазины запчастей':

       $(".zapchbuttons").show(3000);

      break;

      case 'Авто на запчасти':

       $(".zapchbuttons").show(3000);

      break;

      case 'Расходники':

       $(".zapchbuttons").show(3000);

      break;

      case 'Аксессуары и мультимедиа':

       $(".zapchbuttons").show(3000);

      break;

      case 'Шины':

      $(".shinahide").show(3000);

      break;

      case 'Диски':

      $(".diskhide").show(3000);

      break;


      //dom

    case 4:

      break;
    case 5:

      break;

      default:
      //$(".allhide").hide();


  }



  switch (level2) {
    //nedvizhimost

      case 'продать машину':

      $(".avtohide").show(3000);

      break;


      case 'спецтехника':

      $(".speshide").show(3000);

      break;


      case 'Сдать':

      $(".sroksdachi").show(3000);

      break;

      case 'Купить':

      $(".senaot").show(3000);

      break;



      //dom

    case 4:

      break;
    case 5:

      break;

      default:
      //$(".allhide").hide();


  }








  //podgruzka modulya nedvizhimosti


  var pickerDevice = myApp.picker.create({
      inputEl: '.picker-sten',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['кирпичный', 'панельный', 'монолитный', 'блочный', 'деревянный', 'шлакоблочный', 'железобетонный', 'другое']
          }
      ]
  });

  var pickerDevice6 = myApp.picker.create({
      inputEl: '.picker-sten2',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['кирпичный', 'панельный', 'монолитный', 'блочный', 'деревянный', 'шлакоблочный', 'железобетонный', 'другое']
          }
      ]
  });


  var pickerDevice2 = myApp.picker.create({
      inputEl: '#picker-type',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['коттедж', 'времянка', '1 этажный дом', 'барачного типа', 'другое']
          }
      ]
  });

  var pickerDevice3 = myApp.picker.create({
      inputEl: '#picker-type2',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['коттедж', 'времянка', 'небольшой стандартный дачный домик', 'другое']

          }
      ]
  });

  var pickerDevice4 = myApp.picker.create({
      inputEl: '#picker-type3',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['в бизнес центре', 'в торговом центре', 'в административном здании', 'в жилом доме','в коттедже','другое']

          }
      ]
  });


  var pickerDevice5 = myApp.picker.create({
      inputEl: '#picker-type4',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['улучшенное', 'старого типа', 'новое', 'барачный','бизнес центр','хрущевка','другое']

          }
      ]
  });

  var pickerDevice7 = myApp.picker.create({
      inputEl: '#picker-type7',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['в бизнес центре', 'в торговом центре', 'в административном здании', 'в жилом доме','в коттедже','отдельно стоящее','другое']

          }
      ]
  });


  var pickerDevice8 = myApp.picker.create({
      inputEl: '#picker-type8',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['белый','черный','серый','серебристый','серебристый','синий','голубой','зеленый','красный','бордовый','оранжевый','розовый','бежевый','желтый','золотистый','коричневый','фиолетовый']

          }
      ]
  });


  var pickerDevice9 = myApp.picker.create({
      inputEl: '#picker-type9',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['хорошее','отличное','новое']

          }
      ]
  });



  $(".obem").mask("9.9");


  var carVendors = {
      Toyota : ['4Runner','Allex','Allion','Alphard','Altezza','Aristo','Aurion','Auris','Avalon','Avensis','Avensis-Verso','Aygo','bB','Blizzard','Brevis','Caldina',
      'Cami','Camry','Camry-Gracia','Camry-Lumiere','Carib','Carina-E','Carina-ED','Carina-2','Cavalier','Celica','Celsior','Century','Ceres','Chaser','Corolla','Corolla-Verso',
      'Corona','Corona-Exiv','Corona-Mark-II','Corona-Premio','Corsa','Cressida','Cresta','Crown','Crown-Majesta','Curren','Cynos','Duet','Echo','Emina','Estima','FJ-Cruiser','Fortuner',
      'Funcargo','Gaia','Granvia','GT86','Harrier','Hiace','Hiace-Regius','Highlander','Hilux','Hilux-Surf','Innova','Ipsum','IQ','Isis','Ist','Kluger','Land-Cruiser','Land-Cruiser-Prado',
      'Levin','Lite-Ace','Lucida','Marino','Mark-II','Mark-X','Master','Master-Ace','Master-Ace-Surf','Master-Surf','Matrix','Mega-Cruiser','Model-F','MR-2','Nadia','Noah','Opa','Paseo','Passo-Sette',
      'Picnic','Platz','Porte','Previa','Prius','Probox','Progres','Pronard','Ractis','Raum','RAV','Regius','Scepter','Sequoia','Sera','Sienna','Sienta','Soarer','Solara','Soluna','Spacio',
      'Sprinter','Sprinter-Carib','Sprinter-Marino','Sprinter<-Trueno','Starlet','Supra','Tacoma','Tercel','Town-Ace','Town-Ace-Noah','Townace','Regius','Tundra','Urban-Cruiser',
      'Venza','Verossa','Verso','Verso','Vibe','Vista','Vista-Ardeo','Vitz','Voltz','Voxy','Will','Windom','Wish','Xa','Yaris'],
      Lexus : ['CT-300','CT-300h','CT-200h','ES','ES-300','ES','200','ES-250','ES-300h','ES-330','ES-350','GS','GS-250','GS','300-GS','300h',
      'GS-350','GS','400-GS','430-GS','450h-GS','460-GX','GX-400','GX-460','GX-470','HS-250h','IS','IS-200','IS-220','IS-250','IS-300','IS-350','IS','LFA-LS','LS-400',
      'LS-430','LS-460','LS-500h','LS-600h','LX','LX-450','LX-470','LX-570','NX','NX-200','NX-200t','NX-300h','RC','RC-300h','RC-350','RX','RX-200t','RX-270','RX-300','RX-330',
      'RX-350','RX-400h','RX-450h','SC','SC-300','SC-400','SC-430'],
      Nissan : ['100NX','100SX','180SX','200SX','240SX','280ZX','300ZX','350Z','370Z','Almera','Altima','Armada','Auster','Avenir',
      'Bassara','Bluebird','Bluebird','Sylphy','Caravan','Cedric','Cefiro','Cherry','Cima','Cube','Elgrand','Expert','Fairlady','Frontier','Fuga','Gloria',
      'GT','Homy','Interstar','Juke','Kubistar','Largo','Laurel','Leaf(electric)','Leopard','Liberty','Lucino','March','Maxima','Micra','Mistral','Moco','Murano','Navara',
      'Note','NP300','NV200','Otti','Paladin','Pathfinder','Patrol','Pick','Up','Pixo','Prairie','Prairie-Joy','Presage','Presea','President','Primastar','Primera','Primera-Camino',
      'Pulsar','Qashqai','Qashqai-Quest','nessa','Rasheen','Rogue','Safari','Sentra','Serena','Silvia','Skyline','Skyline-GT','Stagea','Stanza','Sunny','Teana','Terrano','Terrano-II',
      'Tiida','Tino','Titan','Urvan','Vanette','Versa','Wingroad','X-Trail','Xterra'],
      Honda : ['Accord','Airwave','Ascot','Ascot Innova','Asty','Avancier','Beat','Capa','City','Civic','Civic Ballade','Civic Shuttle','Civic Si','Civic Type R','Concerto',
      'CR V','CR Z','Crossroad','Crosstour','CRX','Domani','Element','Elision','FCX','Clarity','Fit','FR V','Freed','Horizon','HR V','Insight','Inspire','Integra','Jazz','Lagreat',
      'Legend','Life','Logo','Mobilio','NSX','Odyssey','Orthia','Partner','Passport','Pilot','Prelude','Quintet','Rafaga','Ridgeline','S2000','Saber','Shuttle','SM-X','Spike','Stepwgn',
      'Stream','Today','Torneo','Vamos','Vezel','Vigor'],
      Hyundai : ['Accent','Atos','Avanta','Touring','Avante','Azera','Centennial','Chorus','Click','Coupe','Dynasty','Elantra','Equus','Excel','Galloper','Genesis','Genesis','Coupe',
      'Getz','Grace','Grand','Starex','Grandeur','100','200','i10','i20','i30','i40','i50','ix20','ix35','ix55','Lantra','Lavita','Marcia','Matrix','Maxcruz','Pony','Porter','Coupe',
      'SantaFe','Santamo','Solaris','Sonata','Starex','Stellar','Terracan','Tiburon','Trajet','Tucson','Tuscani','Veloster','Veracruz','Verna','XG','XG','30','XG','350'],
      Kia : ['Avella','Delta','Besta','Bongo','Borrego','Cadenza','Capital','Carens','Carnival','Cee','Cee','SW','Cerato','Cerato','Koup','Clarus','Concord',
      'Credos','Credos','II','Elan','Enterprise','Joice','K3','Forte','K5','K7','Lotze','Magentis','Mentor','Mohave','Morning','Opirus','Optima','Picanto','Potencia','Pregio','Pride','Pro','Cee','Quoris',
      'Ray','Regal','Retona','Rio','Roadster','Rocsta','Sephia','Shuma','Sorento','Soul','Spectra','Sportage','Grand','Topic','Venga','Visto'],
      Acura : ['CL','CSX','EL','ILX','Integra','MDX','NSX','RDX','RL','RLX','RSX','SLX','TL','TLX','TSX','ZDX'],
      Audi : ['100','200','80','90','A1','A2','A3','A4','A4-allroad','A5','A6','A6-allroad','A7','A8','A8-Allroad','Cabriolet-Coupe','Q3','Q5','Q7','R8',
      'RS','Q3','RS2','RS3','RS4','RS5','RS6','RS7','Q3','Q5','S1','S2','S3','S4','S5','S6','S7','S8','TT','TTS','V8'],
      Volkswagen : ['Amarok','Beetle','Bora','Caddy','California','Campers','Caravelle','Corrado','Crafter','Derby','Eos','Eurovan','Fox','Gol','Golf','Golf',
      'Country','Golf','Plus','Golf','Sportsvan','Jetta','Kaefer','LT','Lupo','Multivan','Passat','Passat-CC','Phaeton','Pointer','Polo','Polo-Classic','Routan','Santana',
      'Scirocco','Sharan','Taro','Tiguan','Touareg','Touran','Transporter','up','Vento'],
      BMW : ['1-series','114','116','118','120','125','128','130i','135i','2-series','218','220','225','228i','Series','Active','Tourer','3-Series','315','316','318','318i',
      '320','320i','323','324d','325','328','330','335','4-Series','418','420','425','428','430','435','5-Series','518','520','523','524','525','528','530','530','ActiveHybrid',
      '535','540','545','550','6-Series','628','630','633','635','640','645','650','7-Series','725','728','730','732','735','740','745','750','760','8-Series','840','850','i3',
      'i8','GT-Series','Gran-Turismo Series','M1','Coupe','M135i','M235i','M3','M4','M5','M550d','M6','Coupe','Roadster','X5','X6','X-Series','X1','X3','X4','X5','X6','Z-Series',
      'Z3','Z4','Z8'],
      Mercedes_Benz : ['190','AMG-GT','A-Класс','A-140','A-150','A-160','A-170','A-180','A-190','A-200','A-210','A-220','A-250','A-45-AMG','B-Класс','B-150','B-160','B-170','B-180','B-200','B-220',
      'B-250','C-Класс','C-160','C-180','C-200','C-220','C-230','C-240','C-250','C-270','C-280','C-30AMG','C-300','C-32AMG','C-320','C-350','C-400','C-36AMG','C-43AMG','C-450AMG','C-55AMG','C-63AMG',
      'Citan','CE-class','CE-200','CE-220','CE-230','CE-300','CL-class','CL-180','CL-200','CL-220','CL-230','CL-420','CL-500','CL-550','CL-45AMG','CL-55AMG','CL-600','CL-63AMG','CL-65AMG','CLA-class',
      'CLA-180','CLA-200','CLA-220','CLA-250','CLA45-AMG','CLC-160','CLC-180','CLC-200','CLC-220','CLC-230','CLC-350','CLK-class','CLK-200','CLK-220','CLK-230','CLK-240','CLK-270','CLK-280','CLK-320',
      'CLK-350','CLK-430','CLK-500','CLK-55AMG','CLK-63AMG','CLS-class','CLS-250','CLS-280','CLS-320','CLS-350','CLS-400','CLS-500','CLS-550','CLS-55AMG','CLS-63AMG','E-class','E-200','E-220','E-230',
      'E-240','E-250','E-260','E-270','E-280','E-290','E-300','E-320','E-350','E-36AMG','E-400','E-420','E-430','E-50','E-500','E-55','E-60AMG','63AMG','G-class','G-230','G-240','G-250','G-270','G-280',
      'G-290','G-300','G-320','G-350','G-400','G-500','G-55AMG','G-63>AMG','G-65AMG','GL-class','GL-320','GL->350','GL-400','GL-420','GL-450','GL-500','GL-550','GL-55AMG','GL-63AMG','GLA-class',
      'GLA-200','GLA-220','GLA-250','GLA-45AMG','GLC-class','GLC-220','GLC-250','GLC-350','GLE-class','Coupe-GLE','350-GLE','400-GLE','GLE450-AMG','Sport-Coupe-AMG','63-GLE-Coupe','GLK-class','GLK-200',
      'GLK-220','GLK-250','GLK-280','GLK-300','GLK-320','GLK-350','GLS-class','GLS-350d','GLS-400','GLS-500MB','ML-class','100ML','230ML','250ML','270ML','280ML','300ML','320ML','350ML','400>ML',
      '420ML','430ML','450ML','500ML','550ML','55AMG','ML63AMG','R-class','R-280','R-300','R-320','R-350','R-500','R-63AMG','S-class','S-220','S-260','S-280','S-300','S-320','S-350','S-380','S-400',
      'S-420','S-430','S-450','S-500','S-55','S-550','S-600','S-63AMG','S-65AMG','SL-class','SL-280','SL-300','SL-320','SL-350','SL->380','SL-400','SL-420','SL-450','SL-500','SL-55AMG','SL-560',
      'SL60AMG','SL-600','SL-63AMG','SL-65AMG','SL-70AMG','SL-73AMG','SLK-class','SLK-200','SLK-230','SLK-250','SLK-280','SLK-300','SLK-32AMG','SLK-320','SLK-350','SLK-55AMG','SEC-500AMG','SLR',
      'SLS-AMG','Sprinter','V-class','V-200','V-220','V-230','V-250','V-280','Vaneo','Vario','Viano','Vito'],
      Mitsubishi : ['3000GT','Airtrek','ASX','Carisma','Challenger','Chariot','Colt','Cordia','Debonair','Delica','Diamante','Dingo','Dion','Eclipse','Emeraude','Endeavor','Eterna',
      'Eterna','Sava','FTO','Galant','Grandis','GTO','L200','L300','L400','Lancer','Lancer','Evolution','Legnum','Libero','Cargo','Magna','Minica','Mirage','Montero','Montero','Sport',
      'Nativa','Outlander','Pajero','Pajero','Evolution','Pajero','IO','Pajero','Junior','Pajero','Mini','Pajero','Pinin','Pajero','Sport','Proton','RVR','RVR','Open','Gear','RVR','Sport',
      'Gear','Sapporo','Sigma','Space','Gear','Space','Runner','Space','Star','Space','Wagon','Starion','Toppo','Bj','Wide','Tredia','Zinger'],
      Opel : ['Adam','Agila','Ampera','Antara','Arena','Ascona','Astra','Calibra','Campo','Cascada','Cavalier','Combo','Commodore','Corsa','Diplomat','Frontera','GT','Insignia',
      'Kadett','Manta','Meriva','Mokka','Monterey','Monza','Movano','Nova','Omega','Pick-Up','Sportscap','Rekord','Senator','Signum','Sintra','Speedster','Tigra','Vectra','Vita','Vivaro','Zafira'],
      Skoda : ['120','1203','130','135','Citigo','Estela','Fabia','Favorit','Felicia','Felicia-Combi','Forman','Octavia','Pick-up','Rapid','Roomster','Superb','Yeti'],
      Alfa_Romeo : ['145','146','147','155','156','159','164','166','33','4C','75','8C','Competizione','90','Alfasud','Alfetta','Brera','Crosswagon','Sportwagon','Q4','Giulia',
      'Giulietta','GT','GTV','MiTo','RZ','SZ','Spider','Sprint'],
      Aston_Martin : ['DB7','DB9','DBS','V12','Lagonda','One','77','Rapide','V12','Vanquish','V12','Vantage','V8','V8','Vantage','Vanquish','Vanquish','Vantage','Virage'],
      BYD_elect : ['E6','F0','F3','F6','F7','Flyer','G3','G6','i6','L3','M6','S6'],
      Bentley : ['Arnage','Azure','Bentayga','Brooklands','Continental','Flying','Spur','Continental','GT','Continental','Continental','Eight','Flying','Spur','Mulsanne','Turbo','Turbo','RT','Turbo'],
      Bugatti : ['EB','110','Veyron'],
      Cadillac : ['Coupe','De','Ville','Allante','ATS','BLS','Brougham','Catera','CTS','DeVille','DTS','Eldorado','Escalade','Evoq','Fleetwood','LSE','Sedan','de','Ville','Seville','SRX','STS','XLR','XTS'],
      Chery : ['Amulet','A15','Arrizo','Bonus','A13','Bonus','E3','Cowin','CrossEastar','E5','Fora','A21','IndiS','Kimo','A1','M11','QQ6','S21','Sweet','QQ','Tiggo','Very'],
      Chevrolet : ['Alero','Astra','Astro','Avalanche','Aveo','Beretta','Blazer','Camaro','Caprice','Captiva','Cavalier','Celebrity','Celta','Chevelle','Chevy','Van','Citation','Cobalt',
      'Colorado','Corsica','Corvette','Cruze','El','Camino','Epica','Equinox','Evanda','Express','Series','HHR','Impala','K1500','K30','Kalos','Lacetti','Lanos','Lumina','Malibu','Matiz',
      'Monte','Carlo','Monza','Nexia','Niva','Nubira','Orlando','Prizm','Rezzo','10','Sail','Silverado','Sonic','Spark','Sprint','SSR','Starcraft','Suburban','Tacuma','Tahoe','Tavera','Tracker',
      'TrailBlazer','Trans','Sport','Traverse','Uplander','Van','Venture','Viva','Volt'],
      Chrysler : ['200','300C','300M','Aspen','Cirrus','Concorde','Crossfire','Daytona','ES','Grand','Voyager','GS','GTS','Imperial','Intrepid','Le','Baron','LHS','Nassau',
      'Neon','New','Yorker','Pacifica','Prowler','PT','Cruiser','Saratoga','Sebring','Stratus','Town','Country','Valiant','Viper','Vision','Voyager'],
      Citroen : ['CV','AX','Berlingo','BX','Crosser','Elysee','C1','C15','C2','C3','C3','Picasso','C4','C4','Aircross','C4','Cactus','C4','Picasso','C5','C6','C8','CX','DS3','DS4',
      'DS5','Evasion','Grand','C4','Picasso','GSA','Jumper','Jumpy','Nemo','SAXO','SM','Visa','Xantia','XM','Xsara','Xsara','Picasso','ZX'],
      Daewoo : ['Brougham','Cielo','Damas','Espero','Evanda','Gentra','Kalos','Korando','Lacetti','Lanos','Leganza','Lemance','Lublin','Magnus','Matiz','Matiz','Creative','Musso',
      'Nexia','Nubira','Prince','Racer','Rezzo','Tacuma','Tico','Tosca','Winstorm'],
      Daihatsu : ['Altis','Applause','Boon','Charada','Charmant','Copen','Cuore','Esse','Feroza','Grand','Move',
      'Leeza','Materia','Max','Mira','Move','Naked','Pyzar','Re','Go','Rocky','Rugger','Sirion','Storia','Tanto',
      'Terios','Trevis','Wildcat','YRV'],
      Dodge : ['Avenger','Caliber','Caravan','Challenger','Charger','Dakota','Dart','Daytona','Durango','Dynasty','Grand',
      'Caravan','Intrepid','Journey','Magnum','Monaco','Neon','Nitro','RAM','Shadow','Spirit','Sprinter','Stealth','Stratus','Viper'],
      DongFeng : ['A30','A60','AX7','EQ6380','H30','Cross','L60','MPV','S30','S60','ZNA'],
      FAW : ['6390E','A6','Audi100','Besturn','B50','Besturn','B70','Besturn','X80','Bora','CA1021u2','CA6350','CA6371A4','CA6390B5',
      'CargoVan','City','Golf','Jetta','Jinn','Landmark','Oley','S80','V2','V5','V80','Vita','6371'],
      Ferrari : ['208','246','250','275','288','308','328','330','348','360','365','400','412','456','458','Italia','512','550','575','599','GTB','612','750','California','Daytona','Dino','GT4','Enzo',
      'Ferrari','F355','F40','F430','F50','FF','Mondial','Superamerica','Testarossa'],
      Fiat : ['124','126','127','130','131','500','500L','Albea','Barchetta','Brava','Bravo','Cinquecento','Coupe','Croma',
      'Dino','Doblo','Ducato','Fiorino','Freemont','Grande','Punto','Idea','Kartal','Linea','Marea','Marengo','Multipla','Palio',
      'Panda','Punto','Qubo','Regata','Ritmo','Scudo','Sedici','Seicento','Siena','Spider','Europa','Stilo','Strada','Tempra','Tipo',
      'Ulysse','UNO'],
      Ford : ['Aerostar','Aspire','Max','Bronco','Max','Capri','Contour','Cougar','Courier','Crown','Crown','Victoria','350',
      'Econoline','Econovan','EcoSport','Edge','Escape','Escort','Excursion','Expedition','Explorer','Express','150','250','350',
      '450','650','Fairlane','Falcon','Festiva','Fiesta','Five','Hundred','Flex','Focus','Focus','Max','Freda','Freestyle','Fusion',
      'Galaxy','Granada','Grand','Marquis','GT','KA','Kuga','Lazer','LTD','Maverick','Mercury','Mondeo','Mustang','Orion','Probe',
      'Puma','Ranger','Max','Scorpio','Shelby','Sierra','Taunus','Taurus','Telstar','Tempo','Thunderbird','Tourneo','Transit','Transit',
      'Connect','Windstar'],
      GMC : ['Acadia','Conoma','Denali','Envoy','Jimmy','Safari','Savana','Sierra','Sonoma','Suburban','Syclone','Terrain','Typhoon',
      'Vandura','Yukon'],
      Geely : ['Beauty','Leopard','CK','CK1','Emgrand','EC7','Emgrand','EC8','Emgrand','X7','FC','GC6','GC7','Haoquing','Haoquing','300','LC','LC','Cross',
      'Maple','Meirie','MK','MK-Cross','Otaka','SC7','Uliou','Vision'],
      Hummer : ['H1','H2','H3'],
      Infiniti : ['EX','EX25','EX35','EX37','FX','FX35','FX37','FX30d','FX45','FX50','G20','G25','G35','G37','I30','I35','J30','JX35','M25','M35','M37',
      'M45','M56','Q30','Q45','Q50','Q60','Q70','QX','QX4','QX30','QX50','QX56','QX60','QX70','QX80'],
      Isuzu : ['Amigo','Ascender','Aska','Axiom','Bighorn','Campo','Max','Gemini','Hi','Lander','Midi','Mu','Pa','Nero','Piazza',
      'Pick','Up','Rodeo','Trooper','VehiCross','Wizard'],
      ИЖ : ['2125','2125','2126','2715','2716','2717'],
      JMC : ['Baodian','Landwind','X6'],
      Jaguar : ['I Type','Pace','Type','MK','II Type','Sovereign','Type','XE','XF','XFR','XJ','XJ12','XJ40','XJ6','XJ8','XJR','XJS','XJSC','XK','XKR'],
      Jeep : ['Cherokee CJ','Comanche','Commander','Compass','Grand Cherokee','Liberty','Patriot','Renegade','Wagoneer','Willys','Wrangler'],
      Lamborghini : ['Aventador','Countach','Diablo','Espada','Gallardo','Huracan','Jalpa','LM002','Miura','Murcielago','Reventon','Urraco'],
      LandRover : ['Defender','Discovery','Discovery-Sport','Evoque','Freelander','LR2','LR4','RangeRoverSport'],
      Lifan : ['620','Breez','Cebrium','Celliya','Smily','Solano','X50','X60'],
      Lincoln : ['Aviator','Continental','LS','Mark','Mark VIII','MKS','MKX','MKZ','Navigator','Town','Car','Zephyr'],
      Lotus : ['340','Cortina','Elan','Elise','Elite','Esprit','Europa','Evora','Excel','Exige','Super','Seven','V8'],
      ЛУАЗ : ['967','969'],
      Maybach : ['57','62'],
      Santana : ['Anibal'],
      Saturn : ['Astra','Aura','Ion','LS','LW','Outlook','Relay','SC','Sky','SL','SW','Vue'],
      Seat : ['Alhambra','Altea','Arosa','Cordoba','Exeo','Fura','Ibiza','Inka','Leon','Malaga','Marbella','Rondo','Terra','Toledo'],
      Smart : ['City','Crossblade','ForFour','ForTwo','Roadster'],
      SsangYong : ['Actyon','Actyon-Sports','Chairman','Estano','Istana','Korando','Korando-Family','Kyron','Musso','Musso-Sport',
      'Nomad','Rexton','Rodius','Stavic'],
      Subaru : ['Alcyone','Baja','BRZ','Domingo','Exiga','Forester','Fuji','Impreza','Impreza-XV','Justy','Legacy','Legacy-Grand','Wagon',
      'Legacy-Lancaster','Leone','Libero','Lucra','Outback','Pleo','Rex','Sambar','SVX','Trezia','Tribeca','Vivio','WRX','XT','XV'],
      Suzuki : ['Aerio','Alto','Baleno','Cappuccino','Carry','Celerio','Cervo','Cultus','Ertiga','Escudo','Esteem','Every','Forenza','Fronte',
      'Grand','Vitara','Ignis','Jimny','Kei','Kizashi','Landy','Liana','MR','Wagon','Reno','Samurai','Sidekick','Solio','Spacia','Splash','Swift',
      'SX4','SX4-cross','Vitara','Wagon','Wagon-90','XL7'],
      Tesla_elect : ['Model-S','Model-X','Roadster'],
      Vortex : ['Corda','Estina','Tingo'],
      Volvo : ['240-Series','260-Series','300-Series','440','460','480','740','760','850','850T5','940','960','C30','C70',
      'S40','S60','S70','S80','S90','V40','V50','V60','V70','V70-XC','V80','V90','XC60','XC70','XC90'],
      Газ : ['2310','2401','24011','2402','2403','2407','2410','2411','2412','2413','2414','2417','2477','2705','2752','3101','3102','31022',
      '310221','31029','3110','31105','32213','32215','3302','33023','Siber','21R32','10','NEXT','22R32','20','NEXT'],
      ВАЗ : ['2101','2102','2103','2104','2105','2106','2107','2108','2109','21099','2113','2114','2115LADA','110','2110','2111','2112LADA-Priora',
      '2170','2171','2172','2172-LADA-Kalina','1117','1118','1119-LADA-Kalina','2192','2194-LADA-Granta','2190','2191-LADA-Largus',
      'Largus-R90','Largus-F90','1111','11113','1922','2121','2123','2129','2131','2329','2120','Vesta'],
      ВИС : ['LADA-4x4','234600','234610','234500','234700-LADA-Samara','234900-LADA-Granta'],
      Mazda : ['121','323','616','626','929','Atenza','Axela','AZ','AZ-Offroad','AZ-Wagon','AZ1','AZ3','series','Biante','Bongo',
      'BT','50','Capella','Carol','Cosmo','Cronos','CX','Demio','Efini','MS8','Efini','MS9','Etude','Eunos','500','Eunos','800','Eunos',
      '900','Eunos','Presso','Eunos','Roadster','Familia','Lantis','Levante','Luce','Marvi','Millenia','MPV','MS3','MS6','MS8','MS9','MX3',
      'MX5','MX6','MX8','Navajo','Persona','Premacy','Proceed','Protege','Roadster','RX6','RX7','RX8','Sentia','Speed6','Tribute','Verisa',
      'Xedos','Xedos6','Xedos9'],
      Mini : ['Cabrio','Clubman','Clubvan','Countryman','Coupe','Hatch','Paceman','Roadster'],
      Peugeot : ['1007','106','107','2008','204','205','206','207','208','3008','301','304','305','306','307','308','309','4007',
      '4008','405','406','406-Coupe','407','408','5008','505','508','604','605','607','806','807','Bipper','Tepee','Boxer','Expert','Partner','RCZ'],
      Plymouth : ['Acclaim','Breeze','Grand','Voyager','Laser','Neon','Prowler','Sundance','Voyager'],
      Pontiac : ['6000','Aztec','Bonneville','Fairfly','Fiero','Firebird','G6','Grand-AM','Grand-Prix','GTO','LE','Mans','Montana',
      'Phoenix','Solstige','Sunbird','Sunfire','Targa','Torrent','Trans','Sport','Vibe'],
      Porsche : ['911-Carrera','918','924','928','944','968','Boxster','Cayenne','Cayman','Macan','Panamera'],
      Renault : ['11','12','14','16','18','19','20','21','25','30','Alpine','A110','Alpine','A310','Alpine','V6','Avantime',
      'Boxer','Captur','Clio','Duster','Espace','Express','Fluence','Fuego','Kangoo','Koleos','Laguna','Latitude','Logan',
      'Lutecia','Mascott','Master','Megane','Modus','Rapid','Safrane','Sandero','Sandero','Stepway','Scenic','Symbol','Trafic',
      'Twingo','Twizy','Vel','Satis','ZOE'],
      Rover : ['200','213','214','216','220','400','416','420','45','600','618','620','623','75','800','820','825','827','Austin','Maestro','MGF','Mini','Montego','200','213','214','216','220','400',
      '416','420','45','600','618','620','623','75','800','820','825','827','Austin','Maestro','MGF','Mini','Montego'],
      Rolls_Royce : ['Corniche','Ghost','Park','Ward','Phantom','Silver','Cloud','Silver','Dawn','Silver','Seraph','Silver','Shadow',
      'Silver','Spirit','Silver','Spur','Wraith'],
      Saab : ['2X','7X','90','900','9000','96','99'],
      Samsung : ['QM5','SM3','SM5','SM7'],
      УАЗ : ['967','969'],
      ЗАЗ : ['1102','1103','1105','1125','1140','968','Chance','Forza','Sens','Vida'],
      Retro_Машины : ['Austin-10','Austin-FX4','Barkas','B1000','BMW-321','Buick-Special','Buick-Super','Convertible','Cadillac-DeVille',
      'Cadillac-Eldorado','Chevrolet-Bel-Air','Chrysler-Imperial','DeSoto','Custom','Ford-Model','Ford-Taunus','Ford-Tudor','Lincoln-Continental',
      'Mazda-1300','Mercedes-Benz-220SE-W111','Packard-120-Custom','Packard-180-Super-Eight','Packard-300-Packard-Custom','Clipper','Plymouth-Fury',
      'Rolls-Royce','Silver-Shadow','Simca-Horison','Skoda-1201','Steyr-50','Willys','Skoda-Octavia-Super','12','13','14',
      '20','21','22','24','67','69','965','966','111','114','117','110','400','401','402','403','407','408','423','434'],



  };
  var pickerDependent = myApp.picker.create({
      inputEl: '#picker-dependent',
      toolbarCloseText:'закрыть',
      rotateEffect: true,
      formatValue: function (values) {
          return values[0] + ":" + values[1];
      },
      cols: [
          {
              textAlign: 'left',
              values: ['Toyota', 'Lexus','Nissan', 'Honda', 'Hyundai', 'Kia' ,'Acura' ,'Audi', 'Volkswagen', 'BMW' ,'Mercedes_Benz' ,
              'Mitsubishi', 'Opel' ,'Skoda' ,'Alfa_Romeo', 'Aston_Martin', 'BYD_elect', 'Bentley', 'Bugatti' ,'Cadillac', 'Chery', 'Chevrolet',
              'Chrysler', 'Citroen','Daewoo', 'Daihatsu', 'Dodge', 'DongFeng', 'FAW', 'Ferrari', 'Fiat', 'Ford', 'GMC', 'Geely', 'Hummer',
               'Infiniti', 'Isuzu', 'ИЖ', 'JMC', 'Jaguar', 'Jeep', 'Lamborghini', 'LandRover', 'Lifan', 'Lincoln', 'Lotus', 'ЛУАЗ', 'Maybach',
                'Santana', 'Saturn', 'Seat', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tesla_elect', 'Vortex', 'Volvo', 'Газ', 'ВАЗ', 'ВИС',
                'Mazda', 'Mini', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Renault', 'Rover', 'Rolls_Royce', 'Saab', 'Samsung',
                'УАЗ', 'ЗАЗ', 'Retro_Машины'],
              onChange: function (picker, country) {
                  if(picker.cols[1].replaceValues){
                      picker.cols[1].replaceValues(carVendors[country]);
                  }
              }
          },
          {
              values: carVendors.Toyota,
              width: 160,
          },
      ]
  });


  var pickerDependent25 = myApp.picker.create({
      inputEl: '#picker-dependentzapch',
      toolbarCloseText:'закрыть',
      rotateEffect: true,
      formatValue: function (values) {
          return values[0] + ":" + values[1];
      },
      cols: [
          {
              textAlign: 'left',
              values: ['Toyota', 'Lexus','Nissan', 'Honda', 'Hyundai', 'Kia' ,'Acura' ,'Audi', 'Volkswagen', 'BMW' ,'Mercedes_Benz' ,
              'Mitsubishi', 'Opel' ,'Skoda' ,'Alfa_Romeo', 'Aston_Martin', 'BYD_elect', 'Bentley', 'Bugatti' ,'Cadillac', 'Chery', 'Chevrolet',
              'Chrysler', 'Citroen','Daewoo', 'Daihatsu', 'Dodge', 'DongFeng', 'FAW', 'Ferrari', 'Fiat', 'Ford', 'GMC', 'Geely', 'Hummer',
               'Infiniti', 'Isuzu', 'ИЖ', 'JMC', 'Jaguar', 'Jeep', 'Lamborghini', 'LandRover', 'Lifan', 'Lincoln', 'Lotus', 'ЛУАЗ', 'Maybach',
                'Santana', 'Saturn', 'Seat', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tesla_elect', 'Vortex', 'Volvo', 'Газ', 'ВАЗ', 'ВИС',
                'Mazda', 'Mini', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Renault', 'Rover', 'Rolls_Royce', 'Saab', 'Samsung',
                'УАЗ', 'ЗАЗ', 'Retro_Машины'],
              onChange: function (picker, country) {
                  if(picker.cols[1].replaceValues){
                      picker.cols[1].replaceValues(carVendors[country]);
                  }
              }
          },
          {
              values: carVendors.Toyota,
              width: 160,
          },
      ]
  });


  //podgruzka modulya nedvizhimosti


  var pickerDevice = myApp.picker.create({
      inputEl: '#picker-sdependent',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['Abbey','ABI_Jubilee','Ackermann','ADR_Trailers','Adria','Aichi','Airman','Alloy','Ammann','ANT','Asia','Atlant','Atlas',
              'Atlet','Avant','Avia','Avondale','Bailey','Balkancar','Baw','Beifang_Benchi','Bell','Bergland','Blumhardt','Bobcat','Bomag','Bova',
              'Branson','Bravis','Brenner','Broshuis','Buccaneer','Buerstner','BULL','Bulldog_Trailers','Burg','Caiman','CAMC','Camper','Camro',
              'Caravelair','Carmix','Carson','Case','Caterpillar','Changchun','Changlin','Chateau','Chehvrolet','Chenggong','Chereau','Chery',
              'China_First_Automobile_Group','CHOICE','CIMC','Citroen','Clark','CNH','Coleman','Combilift','Compass','Craftsman','Daehan','NF150',
              'Daenong','Daewoo','DAF','Daihatsu','Dalian','Dasan','Deadong','Demag','Terex','Denyo','Dethleffs','Dieci','Digger','Dimex','Dongfeng',
              'Donghae','Dongyang','Doosan','Doosan','Daewoo','Dorsey_Trailers','Dressta','DVRV','Dynapac','Eduard','Elddis','Elephant',
              'Enxin_Enterprise','HEX9400GYY','EP','Es','Ge','Everdigm','Everlast','30','Fassi','Faun','FAW','Fendt_Xaver','Fiat','Fiat',
              'Hitachi','Fiori','First_Loader','Fleetwood','Fliegl','GmBH','Ford','Forway','Foton','Freightliner','Fruehauf','Fuchs','Fudzi',
              'Fuji','Heavy','Fukai','ZL','926','Furukawa','Gehl','General_Trailers','Genie','Gensco','Goldhofer','Gray','Adams','Great','Dane',
              'Greatwall','Groenewegen','Gros','Grove','Grunwald','GT7','Hagglunds','BV','206','Haihong','Halla','Hamm','Hangcha','Hania','Hanix',
              'Hankook','Hanshin','Hansin','Hanta','Haomei','Hartung','Hayazaki','HBXG','Heli','Hengte','Hiab','Hidromek','Higer','Hino','Hinomoto',
              'Hitachi','Hobby','Prestige','Holmer','Honda','Horyong','Howo','Huanda','Humbaur','Hydrema','Hyster','Hyundai','HZM','IFA','IHI',
              'Ikarus','International','Iseki','Isuzu','Iveco','Jac','Jacto','JBC','JCB','Jian','Cheng','Jinbo','Jinwoo','JMC','John','Deere',
              'Jonyang','Jotec','Jun','Jin','Jungheinrich','Kafi','Kaiser','Kalmar','Kanglim','Karosa','Kato','Kawasaki','KCP','Kelberg','Kenworth',
              'Kia','King','Long','KIP','Knaus','Country','Kobelco','KOBIT','Kogel','Komatsu','Korea','Trailer','Kramer','Krone','Kubota','Kukji',
              'Kyungwon','Lamberet','Lay','Mor','LeciTrailer','LG','Liebherr','Linde','Lishide','LiuGong','LMC','Locatelli','Locust','Longgong',
              'Lonking','Lord','Muensterland','Luna','Luyang','Mack','Maeda','Mag','Magni','MAN','Manac','Auto','Manitou','Manitowoc','Marauder',
              'Marcel','Boschung','SA','Marshall','Masalta','Massey','Ferguson','Max','Maximal','Maxus','Mazda','Mecbo','Meiwa','Menci','Mercedes',
              'Benz','Merlo','Mikasa','Mitsuber','Mitsubishi','Mitsui','Montenegro','Morooka','MST','Mudan','Multix','Mustang','Narko','Nasteveya',
              'NAVECO','NEO','Neoplan','New','Holland','Nichiyu','Niewadow','Niigata','Nippon','Sharyo','Nissan','Nissha','North','Benz','Novas',
              'Opel','Movano','Ormig','Orteco','Pacton','Palazzani','Palfinger','Panav','Peterbilt','Peugeot','Piccini','Pilgrim','International',
              'PONSSE','Porsche','Pramac','Prestige','Putzmeister','Reich','Renault','Rocla','Sakai','Samro','Samsung','Sany','Saton','SB','Trailer',
              'Scania','Schmitz','Schwarzmuller','SDLG','Seddon','Atkinson','SEM','Sennebogen','Sermac','Setra','Shaanxi','Shandong','Shanghai',
              'Shanghai','Pengpu','Shanlin','Shantui','Shaolin','Shehwa','ShenLong','Shibaura','Shifeng','Shindaiwa','Shinko','SibGrand','Sinomach',
              'Sinoway','Sirion','Sisu','Skyline','Soosan','SOR','Southwest_Vehicles','Sprite','SsangYong','ST','Stalowa','Wola','Star','Starcraft',
              'Sterckeman','Steyr','Still','Subaru','Sumitomo','Sungari','1010E','Sunward','Suzuki','Svetruck','Swift_Challenger','Symtec','SZM',
              'Tabbert','Comtessa','Tacomi','Tadano','Takeuchi','Tarsus','TATA_697_NA','Tatra','Tatsuno','TCM','TEC','Teka','Terex','Terex','Bendini',
              'Tesab','TFN','Thomas','Tiangong','Tiema','Tiki','Tissan_Cabstar','Tokyi','Tokyu','Tongyada','Tota','Toyo','Toyota','Trail_King',
              'Trailmobil','Trailor','Trigano_Chantilly','Trouillet','TSR','UD','Trucks','UNC','Unic','Unilift','Unimog','Utilev','Utility','Valtra',
              'Vanhool','Venieri','Vermeer_D24X40A','Viking','Volkswagen','Volvo','VP','Wabash','Wacker','Warynski','Wecan','Weili','Weippert',
              'Weituo','Wielton','Wiggins','Wilk','Deluxe','XB','XCMG','XGMA','Xiamen_Golden_Dragon','Xilin','Xingtai','Xplore','Xuda','Yale',
              'Yamaha','Yanmar','Yigong','YTO','Yuejin','Yusoki','Yutong','Zemag','Zhong','Tong','Zoomlion','90','6476','3575','55','10','81021',
              '_8129','40912','01','150']
          }
      ]
  });



  var pickerDevice26 = myApp.picker.create({
      inputEl: '#picker-sdependentzapch',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['Abbey','ABI_Jubilee','Ackermann','ADR_Trailers','Adria','Aichi','Airman','Alloy','Ammann','ANT','Asia','Atlant','Atlas',
              'Atlet','Avant','Avia','Avondale','Bailey','Balkancar','Baw','Beifang_Benchi','Bell','Bergland','Blumhardt','Bobcat','Bomag','Bova',
              'Branson','Bravis','Brenner','Broshuis','Buccaneer','Buerstner','BULL','Bulldog_Trailers','Burg','Caiman','CAMC','Camper','Camro',
              'Caravelair','Carmix','Carson','Case','Caterpillar','Changchun','Changlin','Chateau','Chehvrolet','Chenggong','Chereau','Chery',
              'China_First_Automobile_Group','CHOICE','CIMC','Citroen','Clark','CNH','Coleman','Combilift','Compass','Craftsman','Daehan','NF150',
              'Daenong','Daewoo','DAF','Daihatsu','Dalian','Dasan','Deadong','Demag','Terex','Denyo','Dethleffs','Dieci','Digger','Dimex','Dongfeng',
              'Donghae','Dongyang','Doosan','Doosan','Daewoo','Dorsey_Trailers','Dressta','DVRV','Dynapac','Eduard','Elddis','Elephant',
              'Enxin_Enterprise','HEX9400GYY','EP','Es','Ge','Everdigm','Everlast','30','Fassi','Faun','FAW','Fendt_Xaver','Fiat','Fiat',
              'Hitachi','Fiori','First_Loader','Fleetwood','Fliegl','GmBH','Ford','Forway','Foton','Freightliner','Fruehauf','Fuchs','Fudzi',
              'Fuji','Heavy','Fukai','ZL','926','Furukawa','Gehl','General_Trailers','Genie','Gensco','Goldhofer','Gray','Adams','Great','Dane',
              'Greatwall','Groenewegen','Gros','Grove','Grunwald','GT7','Hagglunds','BV','206','Haihong','Halla','Hamm','Hangcha','Hania','Hanix',
              'Hankook','Hanshin','Hansin','Hanta','Haomei','Hartung','Hayazaki','HBXG','Heli','Hengte','Hiab','Hidromek','Higer','Hino','Hinomoto',
              'Hitachi','Hobby','Prestige','Holmer','Honda','Horyong','Howo','Huanda','Humbaur','Hydrema','Hyster','Hyundai','HZM','IFA','IHI',
              'Ikarus','International','Iseki','Isuzu','Iveco','Jac','Jacto','JBC','JCB','Jian','Cheng','Jinbo','Jinwoo','JMC','John','Deere',
              'Jonyang','Jotec','Jun','Jin','Jungheinrich','Kafi','Kaiser','Kalmar','Kanglim','Karosa','Kato','Kawasaki','KCP','Kelberg','Kenworth',
              'Kia','King','Long','KIP','Knaus','Country','Kobelco','KOBIT','Kogel','Komatsu','Korea','Trailer','Kramer','Krone','Kubota','Kukji',
              'Kyungwon','Lamberet','Lay','Mor','LeciTrailer','LG','Liebherr','Linde','Lishide','LiuGong','LMC','Locatelli','Locust','Longgong',
              'Lonking','Lord','Muensterland','Luna','Luyang','Mack','Maeda','Mag','Magni','MAN','Manac','Auto','Manitou','Manitowoc','Marauder',
              'Marcel','Boschung','SA','Marshall','Masalta','Massey','Ferguson','Max','Maximal','Maxus','Mazda','Mecbo','Meiwa','Menci','Mercedes',
              'Benz','Merlo','Mikasa','Mitsuber','Mitsubishi','Mitsui','Montenegro','Morooka','MST','Mudan','Multix','Mustang','Narko','Nasteveya',
              'NAVECO','NEO','Neoplan','New','Holland','Nichiyu','Niewadow','Niigata','Nippon','Sharyo','Nissan','Nissha','North','Benz','Novas',
              'Opel','Movano','Ormig','Orteco','Pacton','Palazzani','Palfinger','Panav','Peterbilt','Peugeot','Piccini','Pilgrim','International',
              'PONSSE','Porsche','Pramac','Prestige','Putzmeister','Reich','Renault','Rocla','Sakai','Samro','Samsung','Sany','Saton','SB','Trailer',
              'Scania','Schmitz','Schwarzmuller','SDLG','Seddon','Atkinson','SEM','Sennebogen','Sermac','Setra','Shaanxi','Shandong','Shanghai',
              'Shanghai','Pengpu','Shanlin','Shantui','Shaolin','Shehwa','ShenLong','Shibaura','Shifeng','Shindaiwa','Shinko','SibGrand','Sinomach',
              'Sinoway','Sirion','Sisu','Skyline','Soosan','SOR','Southwest_Vehicles','Sprite','SsangYong','ST','Stalowa','Wola','Star','Starcraft',
              'Sterckeman','Steyr','Still','Subaru','Sumitomo','Sungari','1010E','Sunward','Suzuki','Svetruck','Swift_Challenger','Symtec','SZM',
              'Tabbert','Comtessa','Tacomi','Tadano','Takeuchi','Tarsus','TATA_697_NA','Tatra','Tatsuno','TCM','TEC','Teka','Terex','Terex','Bendini',
              'Tesab','TFN','Thomas','Tiangong','Tiema','Tiki','Tissan_Cabstar','Tokyi','Tokyu','Tongyada','Tota','Toyo','Toyota','Trail_King',
              'Trailmobil','Trailor','Trigano_Chantilly','Trouillet','TSR','UD','Trucks','UNC','Unic','Unilift','Unimog','Utilev','Utility','Valtra',
              'Vanhool','Venieri','Vermeer_D24X40A','Viking','Volkswagen','Volvo','VP','Wabash','Wacker','Warynski','Wecan','Weili','Weippert',
              'Weituo','Wielton','Wiggins','Wilk','Deluxe','XB','XCMG','XGMA','Xiamen_Golden_Dragon','Xilin','Xingtai','Xplore','Xuda','Yale',
              'Yamaha','Yanmar','Yigong','YTO','Yuejin','Yusoki','Yutong','Zemag','Zhong','Tong','Zoomlion','90','6476','3575','55','10','81021',
              '_8129','40912','01','150']
          }
      ]
  });



  var pickerDevice12 = myApp.picker.create({
      inputEl: '#typedependent',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['Автобусы','Автовышки','Автодома','Автокраны','Манипуляторы','Автоцистерны','Бетононасосы','Бетоносмесители(Миксеры)',
              'Бульдозеры','Грузовики','Катки','Погрузчики вилочные','Погрузчики фронтальные','Прицепы и полуприцепы','Тракторы и сельхозтехника',
              'Экскаваторы','другое']
          }
      ]
  });


  var regionVendors = {

      Акмолинская_область : ['Астана','Косшы','Кокшетау','Зеренда','Щучинск','Алексеевка','Степногорск','Ерейментау','Талапкер','Шортанды','Атбасар','Акколь','Бурабай','Державинск','Макинск','Айдабул'],
      Алматинская_область : ['Алматы','Талдыкорган','Каскелен','Талгар','Текели','Есик','Ушарал','Жаркент','Достык','Карабулак','Теректы','Ушконыр','Чимбулак','Абай','Бурундай','Жана Арна','Сарыозек','Сарканд'],
      Северо_Казахстанская_область : ['Петропавловск','Новоишимка','Бескөл','Тайынша','Тайынша-1','Кішкенекөл','Мамлютка','Пресновка','Саумалколь','Сергеевка'],
      Карагандинская_область : ['Караганда','Жезказган','Шахтинск','Темиртау','Каражал','Каркаралинск','Абай','Агадырь','Актас','Балхаш','Ботакара','Бухар Жырау','Доскей','Дубовка','Жезды','Карабас','Осакаровка','Приозерск','Сарань','Сатпаев','Топар','Шашубай'],
      Восточно_Казахстанская_область : ['Семипалатинск','Семей','Усть Каменогорск','Атыбай','Аягоз','Асу Булак','Глубоков','Зайсан','Зыряновск','Кабалтау','Катон Карагай','Курчатов','Маканчи','Новая согра','Ново Хайрузовка','Первомайский','Риддер','Серебрянск','Солнечное','Теремшамка','Тугул','Усть Таловка','Шар','Шемонаиха'],
      Западно_Казахстанская_область : ['Актау','Уральск','Аксай','Дарьинск','Жангала','Зачаганск','Казталовка','Каменка','Переметное','Сайхин','Тайпак','Трекино','Федоровка','Чингирлау'],
      Костанайская_область : ['Костанай','Аркалык','Лисаковск','Рудный','Алтынсарино','Аманкарагай','Аулиеколь','Буревестник','Денисовка','Жалгыскан','Житикара','Заречный','Затобольск','Камысты','Карабалык','Карасу','Кушмурун','Новопавловка','Приозёрный','Раздольный','Садовое','Сарыколь','Силантьевка','Тарановское','Узунколь','Федоровка'],
      Павлодарская_область : ['Павлодар','Экибастуз','Аксу','Акжар','Актогай','Ефремовка','Калкаман','Коктобе','Майкаин','Шидерты'],
      Актюбинская_область : ['Актобе','Хромтау','Шалкар','Алга','Батамшинский','Кандыагаш','Карауылкелди','Каргалинское','Мартук','Шубаркудук','Эмба'],
      Атырауская_область : ['Атырау','Ганюшкино','Дамба','Жаскайрат','Индер','Кульсары','Махамбет','Тенгиз'],
      Жамбылская_область : ['Тараз','Шу','Кордай','Айша Биби','Толе би','Ерназар','Жанатас','Каратау','Кулан','Мерке','Мирный','село.Б.Момышулы','Степное','Татты','Шынты'],
      Кзыл_Ординская_область : ['Кызылорда','Байконур','Айтеке Би','Актан Батыр','Аральск','Жанакорган','Жосалы','Казалинск','Макпалколь','Тасбогет','Теренозек','Торебай Би','Шиели'],
      Мангистауская_область : ['Актау','Актобе','Баскудук','Бейнеу','Жанаозен','Умирзак','Форт Шевченко','Шетпе'],
      ЮКО_область : ['Шымкент','Арыс','Кентау','Байдибекский район -Шаян','Казыгуртский район - Казыгурт','Мактааральский район - Жетысай','Ордабасинский район - Темирлановка','Отырарский район - Шаульдер','Сайрамский район - Аксукент','Сарыагашский район - Сарыагаш','Сузакский район - Шолаккорган','Толебийский район - Ленгер','Тюлькубасский район - Турар Рыскулов','Шардаринский район - Шардара'],

  };



  var pickerDependent15 = myApp.picker.create({
      inputEl: '#regionpicker',
      toolbarCloseText:'закрыть',
      rotateEffect: true,
      formatValue: function (values) {
          return values[0] + ":" + values[1];
      },
      cols: [
          {
              textAlign: 'left',
              values: ['Акмолинская_область','Алматинская_область','Северо_Казахстанская_область','Карагандинская_область','Восточно_Казахстанская_область','Западно_Казахстанская_область','Костанайская_область',
              'Павлодарская_область','Актюбинская_область','Атырауская_область','Жамбылская_область','Кзыл_Ординская_область','Мангистауская_область','ЮКО_область'],
              onChange: function (picker, country) {
                  if(picker.cols[1].replaceValues){
                      picker.cols[1].replaceValues(regionVendors[country]);
                  }
              }
          },
          {
              values: regionVendors.Акмолинская_область,
              width: 160,
          },
      ]
  });








  var pickerDevice20 = myApp.picker.create({
      inputEl: '#yourcontact',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['частное лицо', 'компания', 'бизнес', 'магазин', 'сайт', 'агенство', 'другое']
          }
      ]
  });


  var pickerDevice21 = myApp.picker.create({
      inputEl: '#yourcomment',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['всем','зарегистрированным','никому']
          }
      ]
  });


  var pickerDevice22 = myApp.picker.create({
      inputEl: '#sroksdachi',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['на длительный срок','посуточно','почасовая']
          }
      ]
  });



  var pickerDevice = myApp.picker.create({
      inputEl: '#picker-shina',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['Белшина','Алтайшина','Арктиктранс','Волтайр','Воронежшина','Днепрошина','Кама / Нижнекамскшина','КШЗ','Мастер-Спорт','МШЗ','Омскшина','Уралшина','ЯМЗ',
              'Cordiant','Matador','Accelera','Achilles','Aderenza','Advance','Aeolus','Agate','Alliance','Altenzo','AmberWay','America','AMP_M','T_Terrain_Master','Amtel','Anjie',
              'F811','Annaite','386','Antares','Antyre','Aotel','Aplus','Apollo','Arctic_Claw','Winter_Xsi','Armour','Armpower','Atlas','Atturo','Aufine','Auplus','Aurora_Tire','Austone',
              'Austyre','Autogrip','Autoguard','Avatyre_Freeze','Avon','Barum','BFGoodrich','Big_O_Tires_Big_Foot_A','T_All_Terrain','Blacklion','Blackstone','Blue','Streak','Bontyre','Boto',
              'Brasa','Bridgestone','Capitol','Carbon_Series','CEAT','Chengshan','Clear','Comforser','Constancy','Continental','Contyre','Cooper','Cordiant','Cordovan','Crosswind','Daewoo',
              'Dayton','Dean_Tires','Debica','Deestone_D','102','Delfin','Delinte_Thunder','Dextero','Dick_Cepek','Diplomat','Dmack','Doral','Double_Coin_RLB450','Doublestar','Dunlop','Duro',
              'Durun','Effiplus','Eldorado','ESA','Tecar','Eurotec','Euzkadi','Evenking','Evergreen','EXTREME_Performance_tyres','Falken','Farroad','Fate','Federal','Fedima','Fenglun','FL268',
              'Fenix','Fierce','Finixx','Firestone','Firststop','Flamingo','Force','Formula','Fortio_WN','01','Fortuna','Fulda','Fullrun','FullWay','Fuzion','General_Tire','Geostar','Geotrac',
              'Gislaved','Giti','Goform_W705','Gold_Partner','Goodride','Goodtyre_YB258','Goodyear','GrandTour','Green_Dragon','GreenDiamond_C790','Gremax','Gripmax','GT_Radial','Haida',
              'HanKang','Hankook','Headway','Hercules','Hero','Herovic','Herse','Hifly','Hilo','Hoosier','Horizon','Imperial','Indoradial','Infinity','Innova','Insa','Turbo','Interco',
              'Interstate','Ion_Alloy','Ironman','Jetzon','Tire','Jinyu','Joyroad','Kapsen','Kelly','Kenda','Kenex','Kinforest','King_Meiler','Kingrun','Kingstar','Kleber','Kormoran','Koryo',
              'Kumho','Lakesea','Lander_Sea','Landsail','Lassa','Lexani','LingLong','Litio','Long','March','Mabor','Maloya','Marangoni','Marshal','Mastercraft','Matador','Maxgrade','Maxtrek',
              'Maxxis','Mayrun','Medeo','Mentor','Merit','Meteor','Michelin','Mickey','Thompson','Milestone','Millennium','Minerva','Mitas','MotoMaster','Motrio','Multi','Mile','Nankang',
              'Neuton','Nexen','Nitto','Nokian','NorTec','Northtrek','Novex','Green','Otani_King_Cobra_Extreme','Ovation_VI','702','Pace','Parnelli_Jones_Dirt_Grip','Passage','Petlas',
              'Pinso_PS','91','Pirelli','Pit_Bull','Platin','Pneumant','PointS','Power_Tire','Premiorri','Presa','President','Prestivo','Primewell','Pro_Comp','PROFIL','Radar','Rapid','Regal',
              'Remington_Tire','Rhino_King','Riken','Roadguider','Roadshine','Roadstone','Rockstone','Rosava','Rotalla','Rotex','Runway','Saffiro','Sagitar','Sailun','Satoya','Sava','Semperit',
              'Silverstone','Sime_Tyres','Simex','Solideal','Sonar','Sonny','Sportiva','Sportrak_BYD68','Sprut','Starfire','Stark_Proto','Starperformer','Strata_ZENO_UHP','Stunner','Sumitomo',
              'Sumo','Sunew','Sunfull','Sunitrac','Sunny','Suntek','Superhawk_HK867','Superia','Superstone_Crocodile_Xtreme','Syron','Targum','Techking','Telstar_Tire','Thunderer','Tianfu',
              'Tigar','Toryo','Toyo','Tracmax','Transtone','Trayal','Trazano','Trelleborg','Tri_Ace','Triangle_Group','Tristar','Tunga','TyRex','shield_WS118','Uniglory','Uniroyal','Universal',
              'Viatti','Viking','Vredestein','VSP','Wanli','Warrior_Fluent','R21','Waynner_WIN12','Westlake_Tyres','Wind','Power','Winter_Tact','YellowSea','Yokohama','Zeetex','Zeta','Zetro']
          }
      ]
  });



  var pickerDevice = myApp.picker.create({
      inputEl: '#picker-protektor',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['летние','зимние','всесезонные','Грязь механика','Грязь автомат']
          }
      ]
  });

  var pickerDevice = myApp.picker.create({
      inputEl: '#year-shina',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['2017','2016','2015','2014','2013','2012','2010','2009','2008','2007','2006','2005','2004','2003','2002','2001','2000']
          }
      ]
  });

  var pickerDevice = myApp.picker.create({
      inputEl: '#diam-shina',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['22','21','20','19','18','17','16','15','14','13','70']
          }
      ]
  });

  var pickerDevice = myApp.picker.create({
      inputEl: '#picker-iznos',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['износа нет','10','20','30','40','50','60','70','80','90','100']
          }
      ]
  });


  var pickerDevice = myApp.picker.create({
      inputEl: '#sostoyaniezapch',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['новое', 'б/у в отличном состоянии', 'б/у среднее состояние']
          }
      ]
  });



  var pickerDevice = myApp.picker.create({
      inputEl: '#type-shina',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['для легковых', 'для спецтехники', 'для мотоциклов', 'для велосипедов']
          }
      ]
  });



  var pickerDevice = myApp.picker.create({
      inputEl: '#marka-disk',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['4_Racing','4Go','5ZIGEN','885','Tech','ABT','AC_Schnitzer','Ace','ADR_Design','Advan','Advanti','AEZ','AGForged','AITL','Akito','Alba','Alcasta','Aleks','Alessio',
              'Alfa','Romeo','Almex','Alpina','Alster','Aluchrome','Alutec','AME','American','Racing','Amistad','AMS','Anhelo','Antera','Anzio','Wheels','Apollo','AQUA','Arcasting','Artec',
              'Arteria_Strada_Splendor','ASA_Wheels','Asanti','Asiss','ASW_Prestige','ATP','ATS','Audi','Avangrade','Avarus','AVENUE','AVS','AWS','AZ','Azect','Azev','BADX','BANTAJ','Banzai',
              'Barracuda','BAZO','BBS_RS','Berg','Beyern','Black_Racing','Black_Rhino','Blade','BLEST_Bahnsport','Blitz_Techno','Speed','Blows','Bluege','BMF','BMW_Racing_Dynamics','Bolzanos',
              'Borbet','Brabus','Bradley','Breyton','Bridgestone','Brock','BSA','Buddy_Club_P1','BWR','Cadillac','CAM','Caractere','Carlsson','Carre','Carving_head','40','Carwel','Catwild',
              'CEC_Wheels','Centerline_Wheels','Chevrolet','Clyde','CMS','Compomotive','Conti','Coventry','Crimson','Cross_Street','CST_Zero','Daewoo','Nexia','Daihatsu','Dawning','Motorsport',
              'Decorsa','Delta_DL','Desmond','Detata','Devino','DEZENT','Diablo','Wheels','DIAL','Diamond','Dick','Cepek','Dizzard','DJ_WHEELS','Dotz','Dropstars','Dunlop','EMR','Enkei','Ensure',
              'Enzo','Erglanz','Etabeta','Eurodisk','Eurosport','Extreme','Shina','Fabulous','Ferrari','Final_Speed','Fondmetal','Ford','Forgiato','Forsage','Fox_FX2','FR_Design','Freemotion','Fujibond',
              'Futek','Corporation','Mach','Square','General_Motors','Gialla','Gianelle','GIANNA','Giovanna','GodFather','GR','Grass','Grenade_GX','01','GSI','Hamann','HART','Hayes_Lemmerz',
              'HD','Wheels','Helo','HI','TECH','Hipnotic','Wheels','Honda','Mugen','Hot_Stuff','HP_Design','HRE_Performance','HTL','Hummer','Hyundai','iFree','IJITSU','Ikon','Wheels','Impul',
              'Incubus','Incurve','Wheels','Infinity','Ion','Isuzu','IWheelz','Jaguar','Jawa','JD','Jeep','JT','Racing','Speed','K7','Kahn','KFZ','KIA','Kisna','KMC','Koko_Kuture','Konig',
              'Kormetal','Kosei','Kronprinz','Kyoho_Steiner','Kyowa','Connection','Larex','Lawu','League','Leasing','Leben','LegeArtis','Legzas','Lehrmeister','Lenso','Lexani','Lexus',
              'LF_Dick','Light_Sport_Wheels','Linea','Liso','Lodio_Drive','Lorenso','LORENZO','Lowenhart','LSZ','Luftbahn','Lumarai','LX','Mode','z_SPEED','Magline','Magnetto_Wheels','Mak',
              'Malyce_Legendary','Mamba_OFF_Road','Manaray','Mandrus','Marcello','MAXX_Wheels','Mayhem','Mazda','Mefro','Mercedes_AMG','MHT','Mi','tech','Mickey_Thompson','Milli','Miglia',
              'MIM','Mitsubishi_Rallyart','MKW','MKW_OFF','ROAD','MLJ','MML','Modellista','Modular_Society','MOMO','Monte_Fiore','Monza_Warwick','Motec','Motegi','MOTO_Metal','MPS','MSW',
              'MTT_Racing','MVF','Next','Nexta','Ningbo','Nissan_Nismo','Nitro','Noble','NORDWAY','Norfolk','NZ_Wheels','Green','Oefunger','Off','Road','Wheels','Opel','Oxigin','OZ',
              'PANTHER','PDW_Wheels','Peugeot','PIAA','Porsche','PRD','Primo','Pro_Comp','ProDrive','Proma','PTW','Steel','Race_Ready','Racing_Hart','Radius','Raiden','Range_Rover',
              'Rapid','Ravrion','RAYS','RC_Design','Red_Wheel','Redbourne','Renault','Replay','Replica','RepliKey','Reverline','Rial','Riverside','Rodeo_Drive','Romagna_Ruote',
              'Ronal','Rondell','Roner','Rota','Rotiform','Royal_Wheels','Rozest','RR','RS_Wheels','Russtec','RW','Sakura_Wheels','Salita','Sanfox','Sant','Schmidt','Sein','SEYEN',
              'SH','SHLK','Skoda','Slik','SLK','Sparco','Speedline','Spirits_Sagest','Sport_Technic','Sportmax_Racing','SportWay','SRD_Tuning','SsangYong','SSR','SSW','Stalker',
              'Starform_Basel','Stark','Steel_Wheels','Steinmetz','Stich','Precious','Stilauto','Stonewell','Storm_Wheels','Stranger','Strut','Subaru_STI','Suzuki','SW','Sword','Syms_SRW',
              'C1','Tailong','Team_Dynamics','Tech','Line','Technocast_Corsia','Tezzen','TGRACING','TIS','TMW','Tomason','TOMS','Toora','Top_True','Topy','Touchdown','Toyota','TRD',
              'Trebl','TRW','TSW','Tuff_A','Tunzzo','ULTRA','Ultraleggera','URAS','Urban_Racing','VAGGIO','Valbrem','Valente','VCT','Venerdi','Verde','Vertini','Vianor','Victor_Equipment',
              'Violento','Volkswagen','Voltec','Volvo','Vorxtec','Vossen','Wald','Watanabe','Weds','Wheelegend','Wheelworld','Wibram','Wiger','Winners','Winning_Street_Wheel','WOLF_Wheels',
              'Work','Worx','Wrest','WSP','trike','XD_Series','Xinfa','XXR','Yamato','Yokatta','Yokohama_Laycea','YST',
              'Yueling_wheels','Zack','Zauber','Zeit','Zent','Zephyr','Zepp','ZEPPELIN_Prestige','Zina','Zinik','Zorat_Wheels','Zormer','Zumbo_Wheels','ZW','ZY','_412']
          }
      ]
  });



  var pickerDevice = myApp.picker.create({
      inputEl: '#picker-disk',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['литые', 'кованные', 'штампованные']
          }
      ]
  });


  var pickerDevice = myApp.picker.create({
      inputEl: '#year-disk',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['2017','2016','2015','2014','2013','2012','2010','2009','2008','2007','2006','2005','2004','2003','2002','2001','2000']
          }
      ]
  });


  var pickerDevice = myApp.picker.create({
      inputEl: '#diam-diska',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['22','21','20','19','18','17','16','15','14','13','70']
          }
      ]
  });



  var pickerDevice = myApp.picker.create({
      inputEl: '#picker-iznosd',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['износа нет','10','20','30','40','50','60','70','80','90','100']
          }
      ]
  });


  var pickerDevice = myApp.picker.create({
      inputEl: '#type-diskd',
      toolbarCloseText:'закрыть',
      cols: [
          {
              textAlign: 'center',
              values: ['для легковых', 'для спецтехники', 'для мотоциклов', 'для велосипедов']
          }
      ]
  });


  //transferphoto("do_uploadapp/");


  globalfixobupload = 1;




    ///-----------------add js



                    //module sendob
                    $$('.sendob').on('click', function(){


                          $(".gifloader").show();


                          var formData = myApp.form.convertToData('#form_to_submit');



                          //manipulyasiya s dannimi

                          formData['category1'] = localStorage.getItem("level1");
                          formData['category2'] = localStorage.getItem("level2");
                          formData['category3'] = localStorage.getItem("level3");

                          var country = formData['city'];

                          if(country != null){

                          var arrayscountry = country.split(':');
                          formData['city'] = arrayscountry[1];

                          var splittingstringarray = arrayscountry[0].split("_");

                          formData['strana'] = splittingstringarray[0] + " " + splittingstringarray[1];

                          }

                          formData['valyuta'] = "тг";


                          var marka = formData['marka'];

                          if(marka != null){

                              var arraysmarka = marka.split(':');

                              formData['marka'] = arraysmarka[0];
                              formData['model'] = arraysmarka[1];

                            }



                          var markazapch = formData['markazapch'];

                          if(markazapch != null){

                              var arraysmarkazapch = markazapch.split(':');

                              formData['markazapch'] = arraysmarkazapch[0];
                              formData['modelzapch'] = arraysmarkazapch[1];

                            }

                          var typezapchasti = localStorage.getItem("typezapchasti");

                          if((typezapchasti) || (typezapchasti != 0)){
                            formData['typezapchasti'] = typezapchasti;
                          }else{
                            formData['typezapchasti'] = "нет";
                          }

                          var markazapch = formData['markazapch'];

                          if(markazapch != null){

                              var arraysmarkazapch = markazapch.split(':');

                              formData['markazapch'] = arraysmarkazapch[1];

                              formData['modelzapch'] = arraysmarkazapch[0];

                          }

                          var useremail = localStorage.getItem("useremail");

                          if(useremail){
                              formData['email'] = useremail;
                          }
                    //manipulyasiya s dannimi




                        //function zapolneniya

                        for (keys in formData) {

                           // console.log(formData[keys]);
                            if((formData[keys] == null) || (formData[keys] == undefined) || (formData[keys] == "") || (formData[keys] == " undefined")){

                                if(!formData[keys]){
                                  formData[keys] = 0;
                                }else{
                                  formData[keys] = 0;
                                }
                                  formData[keys] = 0;




                            }

                            //console.log(formData[keys]);


                        }
                        //function zapolneniya








                    var validate = ["script","alert","php","xss","*","-- -","--","<",">","concat","=","<script>","</script>","</"];

                        //validate function

                        for (key in formData) {

                          for(var i = 0;i < validate.length;i++){

                            var tt = formData[key];
                            ttxt = tt.toString();
                            var xt = ttxt.indexOf(validate[i]);

                            //console.log(xt);

                            if(xt >= 0){

                                formData[key] = ".";
                                //console.log("заменена");

                            }


                            var t = formData[key].length;

                            for(var j = 0;j < t;j++){

                              var y = formData[key][j];

                              if(y == validate[i]){
                                formData[key][j] = ".";
                                //console.log("заменена");
                              }

                            }

                          }

                          //console.log(key);

                        }
                        //validate function

                       //console.log(formData);

                    //return false;

                        //dalee sdelat' zapolnenie

                    //rab4


                          var baseurl = localStorage.getItem("baseurl");

                          $.ajax({

                                  "type":"GET",
                                  "url": baseurl + "setuserob/",    /*random restourants menu zakaZ*/

                                  dataType: "jsonp",
                                  crossDomain: true,
                                  "data": formData,

                                  "success":kx001,
                                  "error":errorfunc001

                                  });


                            function kx001(result){

                                //console.log(result);

                                    if(result[0] == "ok"){

                                        //clean formdata

                                        // for (newkey in formData) {

                                        //     $('[name = '+ newkey +']').val("");

                                        // }

                                        //clean formdata

                                        myApp.dialog.alert('Спасибо ваше объявление подано!','Сервис');

                                        localStorage.setItem("osenka","1");
                                        //mainView.router.refreshPage("#add");
                                        //mainView.router.loadPage("#");
                                        //router.navigate({ name: 'index' });
                                        router.back();



                                        $(".gifloader").hide();


                                        setTimeout(function(){

                                            window.location.reload();


                                        },2000);




                                    }


                            }

                            function errorfunc001(){

                                   $(".gifloader").hide();
                            }


                            globalfixobupload = 0;



                      //alert(JSON.stringify(formData));
                      //console.log(formData);
                    });




                    // module pereclyucheniya legk gruz

                    $(".legk").click(function(){

                        $(".zapchhide").show();
                        $(".zapchspeshide").hide();

                        $('[name = "markaspeszapch"]').val("");

                        $(".legk").addClass("button-active");
                        $(".gruz").removeClass("button-active");


                        localStorage.setItem("typezapchasti","легковая");

                    });

                    $(".gruz").click(function(){

                        $(".zapchhide").hide();
                        $(".zapchspeshide").show();

                        $(".gruz").addClass("button-active");
                        $(".legk").removeClass("button-active");

                        $('[name = "markazapch"]').val("");

                        localStorage.setItem("typezapchasti","грузовая");

                    });
                    // module pereclyucheniya legk gruz
                    //module prodolzheniya



    ///-----------------add js


    $(".myphone").mask("+7(999)9999999");
    $(".yearmask").mask("9999");






  });   //kones action page
