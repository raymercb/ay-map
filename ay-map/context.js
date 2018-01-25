    var offersAndPrices = {},
        airportLinks = {},
        travelGuides = {};
        destPages = {};




    offersAndPrices["BKK"] = 
    {
        'price'   : "1,059",
        'offerId' : "28695"
    }


    offersAndPrices["HEL"] = 
    {
        'price'   : "1,089",
        'offerId' : "14165"
    }




    offersAndPrices["OUL"] = 
    {
        'price'   : "1,535",
        'offerId' : "47399"
    }


    offersAndPrices["RVN"] = 
    {
        'price'   : "1,549",
        'offerId' : "47398"
    }



    offersAndPrices["MOW"] = 
    {
        'price'   : "605",
        'offerId' : "14258"
    }




    offersAndPrices["PAR"] = 
    {
        'price'   : "1,360",
        'offerId' : "14168"
    }


    offersAndPrices["HKG"] = 
    {
        'price'   : "975",
        'offerId' : "28693"
    }



    offersAndPrices["LED"] = 
    {
        'price'   : "605",
        'offerId' : "14259"
    }


    offersAndPrices["LON"] = 
    {
        'price'   : "1,005",
        'offerId' : "14167"
    }



    offersAndPrices["VNO"] = 
    {
        'price'   : "1,289",
        'offerId' : "14170"
    }



    offersAndPrices["SIN"] = 
    {
        'price'   : "959",
        'offerId' : "28696"
    }



    offersAndPrices["TLL"] = 
    {
        'price'   : "1,289",
        'offerId' : "14169"
    }



    offersAndPrices["SVX"] = 
    {
        'price'   : "565",
        'offerId' : "28697"
    }


    offersAndPrices["STO"] = 
    {
        'price'   : "1,335",
        'offerId' : "16196"
    }


    offersAndPrices["DEL"] = 
    {
        'price'   : "939",
        'offerId' : "28694"
    }


    offersAndPrices["TLV"] = 
    {
        'price'   : "910",
        'offerId' : "16003"
    }


    offersAndPrices["MAD"] = 
    {
        'price'   : "1,080",
        'offerId' : "44879"
    }


    offersAndPrices["BUD"] = 
    {
        'price'   : "1,295",
        'offerId' : "44880"
    }


    offersAndPrices["RIX"] = 
    {
        'price'   : "1,290",
        'offerId' : "44881"
    }



    offersAndPrices["WAW"] = 
    {
        'price'   : "1,295",
        'offerId' : "44961"
    }


    airportLinks["DPS"] = "http://bali-airport.com/?lang=en";
    airportLinks["BER"] = "http://www.berlin-airport.de/en/";
    airportLinks["BUD"] = "http://www.bud.hu/english";
    airportLinks["DUB"] = "http://www.dublinairport.com/";
    airportLinks["HEL"] = "https://www.finavia.fi/en/helsinki-airport/";
    airportLinks["JOE"] = "http://www.finavia.fi/en/joensuu/";
    airportLinks["KAJ"] = "http://www.finavia.fi/en/kajaani/";
    airportLinks["KOK"] = "http://www.finavia.fi/airports/airport_kokkola-pietarsaari";
    airportLinks["KBV"] = "https://en.wikivoyage.org/wiki/Krabi_Town";
    airportLinks["KUO"] = "http://www.finavia.fi/en/kuopio/";
    airportLinks["LON"] = "http://www.heathrowairport.com/";
    airportLinks["AGP"] = "http://www.aena-aeropuertos.es/csee/Satellite/Aeropuerto-Malaga/en/";
    airportLinks["MIL"] = "http://www1.seamilano.eu/landing/index_en.html";
    airportLinks["OUL"] = "http://www.finavia.fi/en/oulu/";
    airportLinks["PAR"] = "http://www.aeroportsdeparis.fr/en/homepage";
    airportLinks["HTK"] = "http://phuketairportthai.com/";
    airportLinks["PRG"] = "http://www.prg.aero/en/";
    airportLinks["RIX"] = "http://www.riga-airport.com/";
    airportLinks["ROM"] = "http://www.adr.it/web/aeroporti-di-roma-en-/pax-fco-fiumicino";
    airportLinks["RVN"] = "http://www.finavia.fi/en/rovaniemi/";
    airportLinks["LED"] = "http://www.pulkovoairport.ru/en/";
    airportLinks["SYD"] = "http://www.sydneyairport.com.au/";
    airportLinks["TLL"] = "http://www.tallinn-airport.ee/en";
    airportLinks["VAA"] = "http://www.finavia.fi/en/vaasa/";
    airportLinks["VNO"] = "http://www.vilnius-airport.lt/en/";
    airportLinks["STO"] = "http://www.swedavia.se/arlanda/";
    airportLinks["BKK"] = "http://suvarnabhumiairport.com/en";
    airportLinks["BJS"] = "http://en.bcia.com.cn/";
    airportLinks["CKG"] = "http://www.cqa.cn/u/jichang/";
    airportLinks["DEL"] = "http://www.delhiairport.com/";
    airportLinks["SEL"] = "http://www.airport.kr/pa/ko/d/index.jsp";
    airportLinks["HKG"] = "http://www.hongkongairport.com/eng/index.html";
    airportLinks["HKT"] = "http://phuketairportthai.com/";
    airportLinks["NGO"] = "http://www.centrair.jp/en/";
    airportLinks["OSA"] = "http://www.kansai-airport.or.jp/en/index.asp";
    airportLinks["PVG"] = "http://en.shairport.com/pudongair.html";
    airportLinks["SIN"] = "http://www.changiairport.com/";
    airportLinks["TYO"] = "http://www.narita-airport.jp/en/";
    airportLinks["XIY"] = "http://www.xxia.com/en/";
    airportLinks["DXB"] = "http://www.dubaiairports.ae/";
    airportLinks["CAN"] = "http://www.gbiac.net/en/byhome";
    airportLinks["CPH"] = "https://www.cph.dk/en/";
    airportLinks["TAY"] = "http://www.tartu-airport.ee/eng";
    airportLinks["IVL"] = "http://www.finavia.fi/en/ivalo/";
    airportLinks["NYC"] = "http://www.panynj.gov/airports/jfk.html";
    airportLinks["ALC"] = "http://www.alicante-airport.net/";
    airportLinks["BCN"] = "http://www.aena.es/csee/Satellite/Aeropuerto-Barcelona/en/";
    airportLinks["ENF"] = "http://www.finavia.fi/en/enontekio/";
    airportLinks["IBZ"] = "http://www.ibizaairport.org";
    airportLinks["INN"] = "http://www.innsbruck-airport.com/en/";
    airportLinks["SZG"] = "http://www.salzburg-airport.com/en/";
    airportLinks["JYV"] = "http://www.finavia.fi/en/jyvaskyla/";
    airportLinks["VIE"] = "http://www.viennaairport.com/jart/prj3/va/main.jart?rel=en&reserve-mode=active&content-id=1249344074214";
    airportLinks["KTT"] = "http://www.finavia.fi/en/kittila/";
    airportLinks["BRU"] = "http://www.brusselsairport.be/en/";
    airportLinks["KAO"] = "http://www.finavia.fi/en/kuusamo/";
    airportLinks["TMP"] = " http://www.finavia.fi/en/tampere-pirkkala/";
    airportLinks["DBV"] = "http://www.airport-dubrovnik.hr/index.php/en/?lang=en";
    airportLinks["PUY"] = "http://www.airport-pula.hr/";
    airportLinks["SPU"] = "http://www.split-airport.hr/index.php?lang=en";
    airportLinks["TKU"] = "http://www.finavia.fi/en/turku/";
    airportLinks["PFO"] = "http://www.hermesairports.com/en/larnakahome";
    airportLinks["BLL"] = "http://www.billund-airport.com/";
    airportLinks["BGO"] = "https://avinor.no/en/airport/bergen-airport/";
    airportLinks["OSL"] = "https://avinor.no/en/airport/oslo-airport/";
    airportLinks["AMS"] = "http://www.amsterdamairport.info/";
    airportLinks["GDN"] = "http://www.airport.gdansk.pl/";
    airportLinks["KRK"] = "http://www.krakowairport.pl/en";
    airportLinks["BIQ"] = "http://en.biarritz.aeroport.fr/";
    airportLinks["NCE"] = "http://en.nice.aeroport.fr/";
    airportLinks["WAW"] = "http://www.lotnisko-chopina.pl/";
    airportLinks["DUS"] = "https://www.dus.com/en";
    airportLinks["FRA"] = "http://www.frankfurt-airport.com/content/airport-site/de/reisen/rund-um-den-flug.html";
    airportLinks["HAM"] = "http://www.hamburg-airport.de/en/index.php?";
    airportLinks["MUC"] = "http://www.munich-airport.de/en/consumer/index.jsp";
    airportLinks["ATH"] = "https://www.aia.gr/traveler/";
    airportLinks["MOW"] = "http://www.svo.aero/en/";
    airportLinks["REK"] = "http://www.kefairport.is/english/";
    airportLinks["LJU"] = "http://www.lju-airport.si/en/Main";
    airportLinks["GOT"] = "http://www.swedavia.com/landvetter/";
    airportLinks["VBY"] = "https://www.swedavia.com/visby/";
    airportLinks["GVA"] = "http://www.gva.ch/en/DesktopDefault.aspx";
    airportLinks["CTA"] = "http://www.aeroporto.catania.it/";
    airportLinks["NAP"] = "http://www.aeroportodinapoli.it/";
    airportLinks["ZRH"] = "http://www.zurich-airport.com/";
    airportLinks["PSA"] = "http://www.pisa-airport.com/";
    airportLinks["GZP"] = "http://www.gzpairport.com/en-EN/Pages/Main.aspx";
    airportLinks["RMI"] = "http://riminiairport.com/";
    airportLinks["AYT"] = "http://www.aytport.com/en/index_1.asp";
    airportLinks["VCE"] = "http://www.veniceairport.it/";
    airportLinks["EDI"] = "http://www.edinburghairport.com/";
    airportLinks["VRN"] = "http://www.aeroportoverona.it/passeggeri_t5/";
    airportLinks["MAN"] = "http://www.manchesterairport.co.uk/";
    airportLinks["TLV"] = "http://www.iaa.gov.il/en-US/airports/BenGurion/Pages/default.aspx";
    airportLinks["ETH"] = "http://www.iaa.gov.il/en-US/airports/eilatn/Pages/default.aspx";
    airportLinks["MIA"] = "http://www.miami-airport.com/";
    airportLinks["CHI"] = "http://www.flychicago.com/pages/landingpage.aspx";
    airportLinks["ADL"] = "http://www.adelaideairport.com.au/";
    airportLinks["YTO"] = "http://www.torontopearson.com/#";
    airportLinks["SGN"] = "http://www.hochiminhcityairport.com/";
    airportLinks["HAN"] = "http://www.hanoiairportonline.com/";
    airportLinks["BNE"] = "http://www.bne.com.au/";
    airportLinks["MEL"] = "http://melbourneairport.com.au/";
    airportLinks["PER"] = "http://www.perthairport.com.au/index.aspx";
    airportLinks["AKL"] = "http://www.aucklandairport.co.nz/";
    airportLinks["FUK"] = "http://www.fuk-ab.co.jp/english/";
    airportLinks["UME"] = "https://www.swedavia.com/umea/";
    airportLinks["MLA"] = "https://www.maltairport.com/";
    airportLinks["TCI"] = "http://www.aena.es/en/tenerife-sur-airport/index.html";
    airportLinks["MAH"] = "http://www.menorca-airport.com/en/";
    airportLinks["LPA"] = "http://www.grancanaria-airport.net/";
    airportLinks["FUE"] = "http://www.aena.es/en/fuerteventura-airport/index.html";
    airportLinks["ACE"] = "http://www.lanzarote-airport.net/departures.php";
    airportLinks["MHQ"] = "http://www.finavia.fi/en/mariehamn/";
    airportLinks["VDA"] = "http://www.iaa.gov.il/en-US/airports/eilatn/Pages/default.aspx";
    airportLinks["KEM"] = "http://www.finavia.fi/en/kemi-tornio/";
    airportLinks["SFO"] = "http://www.flysfo.com/";
    airportLinks["TSE"] = "http://en.astanaairport.kz/";
    airportLinks["FNC"] = "http://www.aeroportomadeira.pt/en/fnc/home";
    airportLinks["LAS"] = "https://www.mccarran.com/";
    airportLinks["LAX"] = "https://www.airport-la.com/";
    airportLinks["BOS"] = "http://www.massport.com/logan-airport/";
    airportLinks["SAN"] = "http://www.san.org/";
    airportLinks["YYC"] = "http://www.yyc.com/";
    airportLinks["DFW"] = "https://www.dfwairport.com/";
    airportLinks["ORD"] = "http://www.flychicago.com/pages/landingpage.aspx";

    
        
        travelGuides["BKK"] = "https://www.finnair.com/us/gb/travel-guides-asia/thailand/bangkok";
    
        
        travelGuides["BJS"] = "https://www.finnair.com/us/gb/travel-guides-asia/china/beijing";
    
        
        travelGuides["BER"] = "https://www.finnair.com/us/gb/travel-guides-europe/germany/berlin";
    
        
        travelGuides["CKG"] = "https://www.finnair.com/us/gb/travel-guides-asia/china/chongqing";
    
        
        travelGuides["CPH"] = "https://www.finnair.com/us/gb/travel-guides-europe/denmark/copenhagen";
    
        
        travelGuides["DEL"] = "https://www.finnair.com/us/gb/travel-guides-asia/india/delhi";
    
        
        travelGuides["HAN"] = "https://www.finnair.com/us/gb/travel-guides-asia/vietnam/hanoi";
    
        
        travelGuides["HKG"] = "https://www.finnair.com/us/gb/travel-guides-asia/hong-kong/hong-kong-city";
    
        
        travelGuides["LON"] = "https://www.finnair.com/us/gb/travel-guides-europe/united-kingdom/london";
    
        
        travelGuides["AGP"] = "https://www.finnair.com/us/gb/travel-guides-europe/spain/malaga";
    
        
        travelGuides["MIL"] = "https://www.finnair.com/us/gb/travel-guides-europe/italy/milan";
    
        
        travelGuides["NGO"] = "https://www.finnair.com/us/gb/travel-guides-asia/japan/nagoya";
    
        
        travelGuides["OSA"] = "https://www.finnair.com/us/gb/travel-guides-asia/japan/osaka";
    
        
        travelGuides["PAR"] = "https://www.finnair.com/us/gb/travel-guides-europe/france/paris";
    
        
        travelGuides["ROM"] = "https://www.finnair.com/us/gb/travel-guides-europe/italy/rome";
    
        
        travelGuides["SEL"] = "https://www.finnair.com/us/gb/travel-guides-asia/korea/seoul";
    
        
        travelGuides["PVG"] = "https://www.finnair.com/us/gb/travel-guides-asia/china/shanghai";
    
        
        travelGuides["SIN"] = "https://www.finnair.com/us/gb/travel-guides-asia/singapore/singapore-city";
    
        
        travelGuides["STO"] = "https://www.finnair.com/us/gb/travel-guides-europe/sweden/stockholm";
    
        
        travelGuides["TLL"] = "https://www.finnair.com/us/gb/travel-guides-europe/estonia/tallinn";
    
        
        travelGuides["TYO"] = "https://www.finnair.com/us/gb/travel-guides-asia/japan/tokyo";
    
        
        travelGuides["XIY"] = "https://www.finnair.com/us/gb/travel-guides-asia/china/xian";
    
        
        travelGuides["HEL"] = "https://www.finnair.com/us/gb/travel-guides-europe/finland/helsinki";
    
        
        travelGuides["AMS"] = "https://www.finnair.com/us/gb/travel-guides-europe/netherlands/amsterdam";
    
        
        travelGuides["BCN"] = "https://www.finnair.com/us/gb/travel-guides-europe/spain/barcelona";
    
        
        travelGuides["HR"] = "https://www.finnair.com/us/gb/travel-guides-europe/croatia";
    
        
        travelGuides["MAD"] = "https://www.finnair.com/us/gb/travel-guides-europe/spain/madrid";
    
        
        travelGuides["MIA"] = "https://www.finnair.com/us/gb/travel-guides-north-america/miami";
    
        
        travelGuides["NYC"] = "https://www.finnair.com/us/gb/travel-guides-north-america/new-york";
    
        
        travelGuides["OSL"] = "https://www.finnair.com/us/gb/travel-guides-europe/norway/oslo";
    
        
        travelGuides["PRG"] = "https://www.finnair.com/us/gb/travel-guides-europe/czech-republic/prague";
    
        
        travelGuides["ZRH"] = "https://www.finnair.com/us/gb/travel-guides-europe/switzerland/zurich";
    
        
        travelGuides["CAN"] = "https://www.finnair.com/us/gb/travel-guides-asia/china/guangzhou";
    
        
        travelGuides["FUK"] = "https://www.finnair.com/us/gb/travel-guides-asia/japan/fukuoka";
    
        
        travelGuides["TH"] = "https://www.finnair.com/us/gb/travel-guides-asia/pacific/thailand";
    
        
    
        
        travelGuides["KBV"] = "https://www.finnair.com/us/gb/travel-guides-asia/pacific/thailand";
    
        
        travelGuides["HKT"] = "https://www.finnair.com/us/gb/travel-guides-asia/pacific/thailand";
    
        
        travelGuides["GOT"] = "https://www.finnair.com/us/gb/travel-guides-europe/sweden/gothenburg";
    
        
        travelGuides["MAN"] = "https://www.finnair.com/us/gb/travel-guides-europe/united-kingdom/manchester";
    
        
        travelGuides["BUD"] = "https://www.finnair.com/us/gb/travel-guides-europe/hungary/budapest";
    
        
        travelGuides["DUB"] = "https://www.finnair.com/us/gb/travel-guides-europe/ireland/dublin";
    
        
        travelGuides["SGN"] = "https://www.finnair.com/us/gb/travel-guides-asia/vietnam/ho-chi-minh-city";
    
        
        travelGuides["MUC"] = "https://www.finnair.com/us/gb/travel-guides-europe/germany/munich";
    
        
        travelGuides["REK"] = "https://www.finnair.com/us/gb/travel-guides-europe/iceland/reykjavik";
    
        
        travelGuides["VIE"] = "https://www.finnair.com/us/gb/travel-guides-europe/austria/vienna";
    
        
        travelGuides["LED"] = "https://www.finnair.com/us/gb/travel-guides-europe/russia/st-petersburg";
    
        
        travelGuides["SYD"] = "https://www.finnair.com/us/gb/travel-guides-asia/australia/sydney";
    
        
    

    

    destPages["ADL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/adelaide",
        "nameOf": "",
        "nameTo": "Adelaide"
    }
    destPages["AGP"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/malaga",
        "nameOf": "",
        "nameTo": "Málaga"
    }
    destPages["AKL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/new-zealand/auckland",
        "nameOf": "",
        "nameTo": "Auckland"
    }
    destPages["AMS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/netherlands/amsterdam",
        "nameOf": "",
        "nameTo": "Amsterdam"
    }
    destPages["ATH"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/greece/athens",
        "nameOf": "",
        "nameTo": "Athens"
    }
    destPages["AYT"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/turkey/antalya",
        "nameOf": "",
        "nameTo": "Antalya"
    }
    destPages["BCN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/barcelona",
        "nameOf": "",
        "nameTo": "Barcelona"
    }
    destPages["BER"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/germany/berlin",
        "nameOf": "",
        "nameTo": "Berlin"
    }
    destPages["BGO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/norway/bergen",
        "nameOf": "",
        "nameTo": "Bergen"
    }
    destPages["BIQ"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/france/biarritz",
        "nameOf": "",
        "nameTo": "Biarritz"
    }
    destPages["BJS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/china/beijing",
        "nameOf": "",
        "nameTo": "Beijing"
    }
    destPages["BKK"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/thailand/bangkok",
        "nameOf": "",
        "nameTo": "Bangkok"
    }
    destPages["BLL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/denmark/billund",
        "nameOf": "",
        "nameTo": "Billund"
    }
    destPages["BNE"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/brisbane",
        "nameOf": "",
        "nameTo": "Brisbane"
    }
    destPages["BRU"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/belgium/brussels",
        "nameOf": "",
        "nameTo": "Brussels"
    }
    destPages["BUD"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/hungary/budapest",
        "nameOf": "",
        "nameTo": "Budapest"
    }
    destPages["CAN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/china/guangzhou",
        "nameOf": "",
        "nameTo": "Guangzhou"
    }
    destPages["CHG"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/north-america/chicago",
        "nameOf": "",
        "nameTo": ""
    }
    destPages["CHI"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/north-america/chicago",
        "nameOf": "",
        "nameTo": "Chicago"
    }
    destPages["CHQ"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/greece/rhodes-chania-heraklion-kos",
        "nameOf": "",
        "nameTo": "Chania"
    }
    destPages["CKG"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/china/chongqing",
        "nameOf": "",
        "nameTo": "Chongqing"
    }
    destPages["CPH"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/denmark/copenhagen",
        "nameOf": "",
        "nameTo": "Copenhagen"
    }
    destPages["CTA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/italy/catania/",
        "nameOf": "",
        "nameTo": "Catania"
    }
    destPages["DBV"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/croatia/dubrovnik",
        "nameOf": "",
        "nameTo": "Dubrovnik"
    }
    destPages["DEL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/india/delhi",
        "nameOf": "",
        "nameTo": "Delhi"
    }
    destPages["DPS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/indonesia/bali",
        "nameOf": "",
        "nameTo": "Bali"
    }
    destPages["DUB"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/ireland/dublin",
        "nameOf": "",
        "nameTo": "Dublin"
    }
    destPages["DUS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/germany/dusseldorf",
        "nameOf": "",
        "nameTo": "Duesseldorf"
    }
    destPages["DXB"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/middle-east/united-arab-emirates/dubai",
        "nameOf": "",
        "nameTo": "Dubai"
    }
    destPages["EDI"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/united-kingdom/edinburgh",
        "nameOf": "",
        "nameTo": "Edinburgh"
    }
    destPages["ETH"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/middle-east/israel/eilat",
        "nameOf": "",
        "nameTo": ""
    }
    destPages["FNC"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/portugal/madeira",
        "nameOf": "",
        "nameTo": "Madeira"
    }
    destPages["FRA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/germany/frankfurt",
        "nameOf": "",
        "nameTo": "Frankfurt"
    }
    destPages["FUK"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/japan/fukuoka",
        "nameOf": "",
        "nameTo": "Fukuoka"
    }
    destPages["GDN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/poland/gdansk",
        "nameOf": "",
        "nameTo": "Gdansk"
    }
    destPages["GOJ"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/russia/other-russian-destinations",
        "nameOf": "",
        "nameTo": ""
    }
    destPages["GOT"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/sweden/gothenburg",
        "nameOf": "",
        "nameTo": "Gothenburg"
    }
    destPages["GVA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/switzerland/geneva",
        "nameOf": "",
        "nameTo": "Geneva"
    }
    destPages["GZP"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/turkey/alanya",
        "nameOf": "",
        "nameTo": "Alanya"
    }
    destPages["HAM"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/germany/hamburg",
        "nameOf": "",
        "nameTo": "Hamburg"
    }
    destPages["HEL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/helsinki",
        "nameOf": "",
        "nameTo": "Helsinki"
    }
    destPages["HER"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/greece/rhodes-chania-heraklion-kos",
        "nameOf": "",
        "nameTo": "Heraklion"
    }
    destPages["HKG"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/hong-kong/hong-kong-city",
        "nameOf": "",
        "nameTo": "Hong Kong"
    }
    destPages["HKT"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/thailand/phuket",
        "nameOf": "",
        "nameTo": "Phuket"
    }
    destPages["INN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/austria/innsbruck",
        "nameOf": "",
        "nameTo": "Innsbruck"
    }
    destPages["IVL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/ivalo",
        "nameOf": "",
        "nameTo": "Ivalo"
    }
    destPages["JOE"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/joensuu",
        "nameOf": "",
        "nameTo": "Joensuu"
    }
    destPages["JYV"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/jyvaskyla",
        "nameOf": "",
        "nameTo": "Jyväskylä"
    }
    destPages["KAJ"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/kajaani",
        "nameOf": "",
        "nameTo": "Kajaani"
    }
    destPages["KAO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/kuusamo",
        "nameOf": "",
        "nameTo": "Kuusamo"
    }
    destPages["KBV"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/thailand/krabi",
        "nameOf": "",
        "nameTo": "Krabi"
    }
    destPages["KEM"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/kemi",
        "nameOf": "",
        "nameTo": "Kemi"
    }
    destPages["KGS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/greece/rhodes-chania-heraklion-kos",
        "nameOf": "",
        "nameTo": "Kos Ippokratis"
    }
    destPages["KOK"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/kokkola-pietarsaari",
        "nameOf": "",
        "nameTo": "Kokkola"
    }
    destPages["KRK"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/poland/krakow",
        "nameOf": "",
        "nameTo": "Krakow"
    }
    destPages["KTT"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/kittila",
        "nameOf": "",
        "nameTo": "Kittilä"
    }
    destPages["KUF"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/russia/other-russian-destinations",
        "nameOf": "",
        "nameTo": "Samara"
    }
    destPages["KUO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/kuopio",
        "nameOf": "",
        "nameTo": "Kuopio"
    }
    destPages["KZN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/russia/other-russian-destinations",
        "nameOf": "",
        "nameTo": "Kazan"
    }
    destPages["LED"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/russia/st-petersburg",
        "nameOf": "",
        "nameTo": "St Petersburg"
    }
    destPages["LJU"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/slovenia/ljubljana",
        "nameOf": "",
        "nameTo": "Ljubljana"
    }
    destPages["LON"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/united-kingdom/london",
        "nameOf": "",
        "nameTo": "London"
    }
    destPages["LPA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/gran-canaria",
        "nameOf": "",
        "nameTo": "Gran Canaria"
    }
    destPages["MAD"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/madrid",
        "nameOf": "",
        "nameTo": "Madrid"
    }
    destPages["MAN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/united-kingdom/manchester",
        "nameOf": "",
        "nameTo": "Manchester"
    }
    destPages["MEL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/melbourne",
        "nameOf": "",
        "nameTo": "Melbourne"
    }
    destPages["MHQ"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/mariehamn",
        "nameOf": "",
        "nameTo": "Mariehamn"
    }
    destPages["MIA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/north-america/miami",
        "nameOf": "",
        "nameTo": "Miami"
    }
    destPages["MIL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/italy/milan",
        "nameOf": "",
        "nameTo": "Milan"
    }
    destPages["MLA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/malta/malta",
        "nameOf": "",
        "nameTo": "Malta"
    }
    destPages["MOW"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/russia/moscow",
        "nameOf": "",
        "nameTo": "Moscow"
    }
    destPages["MUC"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/germany/munich",
        "nameOf": "",
        "nameTo": "Munich"
    }
    destPages["NAP"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/italy/naples/",
        "nameOf": "",
        "nameTo": "Naples"
    }
    destPages["NCE"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/france/nice",
        "nameOf": "",
        "nameTo": "Nice"
    }
    destPages["NGO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/japan/nagoya",
        "nameOf": "",
        "nameTo": "Nagoya"
    }
    destPages["NYC"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/north-america/new-york",
        "nameOf": "",
        "nameTo": "New York"
    }
    destPages["OSA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/japan/osaka",
        "nameOf": "",
        "nameTo": "Osaka"
    }
    destPages["OSL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/norway/oslo",
        "nameOf": "",
        "nameTo": "Oslo"
    }
    destPages["OUL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/oulu",
        "nameOf": "",
        "nameTo": "Oulu"
    }
    destPages["PAR"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/france/paris",
        "nameOf": "",
        "nameTo": "Paris"
    }
    destPages["PER"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/perth",
        "nameOf": "",
        "nameTo": "Perth"
    }
    destPages["PFO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/cyprus/paphos",
        "nameOf": "",
        "nameTo": "Paphos"
    }
    destPages["PMI"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/palma-de-mallorca",
        "nameOf": "",
        "nameTo": "Palma de Mallorca"
    }
    destPages["PRG"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/czech-republic/prague",
        "nameOf": "",
        "nameTo": "Prague"
    }
    destPages["PSA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/italy/pisa",
        "nameOf": "",
        "nameTo": "Pisa"
    }
    destPages["PUY"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/croatia/pula",
        "nameOf": "",
        "nameTo": "Pula"
    }
    destPages["PVG"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/china/shanghai",
        "nameOf": "",
        "nameTo": "Shanghai"
    }
    destPages["REK"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/iceland/reykjavik",
        "nameOf": "",
        "nameTo": "Reykjavik"
    }
    destPages["RHO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/greece/rhodes-chania-heraklion-kos",
        "nameOf": "",
        "nameTo": "Rhodes"
    }
    destPages["RIX"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/latvia/riga",
        "nameOf": "",
        "nameTo": "Riga"
    }
    destPages["RMI"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/italy/rimini",
        "nameOf": "",
        "nameTo": "Rimini Miramare"
    }
    destPages["ROM"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/italy/rome",
        "nameOf": "",
        "nameTo": "Rome"
    }
    destPages["RVN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/rovaniemi",
        "nameOf": "",
        "nameTo": "Rovaniemi"
    }
    destPages["SEL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/korea/seoul",
        "nameOf": "",
        "nameTo": "Seoul"
    }
    destPages["SGN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/vietnam/ho-chi-minh-city",
        "nameOf": "",
        "nameTo": "Ho Chi Minh City"
    }
    destPages["SIN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/singapore/singapore",
        "nameOf": "",
        "nameTo": "Singapore"
    }
    destPages["SPU"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/croatia/split",
        "nameOf": "",
        "nameTo": "Split"
    }
    destPages["STO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/sweden/stockholm",
        "nameOf": "",
        "nameTo": "Stockholm"
    }
    destPages["SVX"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/russia/other-russian-destinations",
        "nameOf": "",
        "nameTo": "Yekaterinburg"
    }
    destPages["SYD"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/sydney",
        "nameOf": "",
        "nameTo": "Sydney"
    }
    destPages["SZG"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/austria/salzburg",
        "nameOf": "",
        "nameTo": "Salzburg"
    }
    destPages["TAY"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/estonia/tartu",
        "nameOf": "",
        "nameTo": "Tartu"
    }
    destPages["TCI"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/tenerife",
        "nameOf": "",
        "nameTo": "Tenerife"
    }
    destPages["TKU"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/turku",
        "nameOf": "",
        "nameTo": "Turku"
    }
    destPages["TLL"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/estonia/tallinn",
        "nameOf": "",
        "nameTo": "Tallinn"
    }
    destPages["TLV"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/middle-east/tel-aviv",
        "nameOf": "",
        "nameTo": "Tel Aviv"
    }
    destPages["TMP"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/tampere",
        "nameOf": "",
        "nameTo": "Tampere"
    }
    destPages["TYO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/japan/tokyo",
        "nameOf": "",
        "nameTo": "Tokyo"
    }
    destPages["VAA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/vaasa",
        "nameOf": "",
        "nameTo": "Vaasa"
    }
    destPages["VCE"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/italy/venice",
        "nameOf": "",
        "nameTo": "Venice"
    }
    destPages["VDA"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/middle-east/israel/eilat",
        "nameOf": "",
        "nameTo": "Eilat"
    }
    destPages["VIE"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/austria/vienna",
        "nameOf": "",
        "nameTo": "Vienna"
    }
    destPages["VNO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/lithuania/vilnius",
        "nameOf": "",
        "nameTo": "Vilnius"
    }
    destPages["VRN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/italy/verona",
        "nameOf": "",
        "nameTo": "Verona"
    }
    destPages["WAW"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/poland/warsaw",
        "nameOf": "",
        "nameTo": "Warsaw"
    }
    destPages["XIY"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/china/xian",
        "nameOf": "",
        "nameTo": "Xi’an"
    }
    destPages["YTO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/north-america/beyond",
        "nameOf": "",
        "nameTo": "Toronto"
    }
    destPages["ZRH"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/switzerland/zurich",
        "nameOf": "",
        "nameTo": "Zurich"
    }
    destPages["VBY"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/sweden/visby",
        "nameOf": "",
        "nameTo": "Visby"
    }
    destPages["ENF"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/finland/lapland/enontekio",
        "nameOf": "",
        "nameTo": "Enontekiö"
    }
    destPages["UME"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/sweden/umea",
        "nameOf": "",
        "nameTo": "Umeå"
    }
    destPages["ALC"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/alicante",
        "nameOf": "",
        "nameTo": "Alicante"
    }
    destPages["IBZ"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/ibiza",
        "nameOf": "",
        "nameTo": "Ibiza"
    }
    destPages["MAH"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/menorca",
        "nameOf": "",
        "nameTo": "Menorca"
    }
    destPages["CFU"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/greece/rhodes-chania-heraklion-kos",
        "nameOf": "",
        "nameTo": ""
    }
    destPages["FUE"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/canary-islands/fuerteventura",
        "nameOf": "",
        "nameTo": "Fuerteventura"
    }
    destPages["ACE"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/canary-islands/lanzarote",
        "nameOf": "",
        "nameTo": "Lanzarote"
    }
    destPages["JSI"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/greece/rhodes-chania-heraklion-kos",
        "nameOf": "",
        "nameTo": "Skiathos"
    }
    destPages["LAS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/north-america/beyond",
        "nameOf": "",
        "nameTo": "Las Vegas"
    }
    destPages["SFO"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/north-america/san-francisco",
        "nameOf": "",
        "nameTo": "San Francisco"
    }
    destPages["POP"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/dominican-republic/puerto-plata",
        "nameOf": "",
        "nameTo": "Puerto Plata"
    }
    destPages["PVR"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/mexico/puerto-vallarta",
        "nameOf": "",
        "nameTo": "Puerto Vallarta"
    }
    destPages["HAV"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/americas/cuba/havana",
        "nameOf": "",
        "nameTo": "Havana"
    }
    destPages["GOI"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/india/goa",
        "nameOf": "",
        "nameTo": "Goa"
    }
    destPages["TSE"] = 
    {
        "link": "https://www.finnair.com:443/pl/AYPortal/wds/DisplayPage.action?COUNTRY_SITE=US&SITE=FINRFINR&LANGUAGE=GB&PAGE=RTSE",
        "nameOf": "",
        "nameTo": "Astana"
    }
    destPages["DRW"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/australia/darwin",
        "nameOf": "",
        "nameTo": "Darwin"
    }
    destPages["TFS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/tenerife",
        "nameOf": "",
        "nameTo": "Tenerife"
    }
    destPages["TFN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/spain/tenerife",
        "nameOf": "",
        "nameTo": "Tenerife"
    }
    destPages["NKG"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/china/nanjing",
        "nameOf": "",
        "nameTo": "Nanjing"
    }
    destPages["STR"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/germany/stuttgart",
        "nameOf": "",
        "nameTo": "Suttgart"
    }
    destPages["LIS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/portugal/lisbon",
        "nameOf": "",
        "nameTo": "Lisbon"
    }
    destPages["HAN"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/asia-pacific/beyond",
        "nameOf": "",
        "nameTo": "Hanoi"
    }
    destPages["TOS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/tromso",
        "nameOf": "",
        "nameTo": ""
    }
    destPages["LYS"] = 
    {
        "link": "https://www.finnair.com/us/gb/destinations/europe/france/lyon",
        "nameOf": "",
        "nameTo": ""
    }
    

    // Create some variables for using them in 'destinations.dev.js'
    var basefact = "2018.1-121",
        bookNow = "Read more and book",
        weeklyFlights = "Weekly flights: up to",
        weeklyFlightsUpTo = "Number of weekly flights up to: ",
        dailyFlights = "Daily flights: up to",
        directFlights = "Direct flights",
        dateUntil = "-",
        cityOfLight = "The enchanting City of Light",

        flightFrequency = {
            AMS : 14,
            AYT : 10,
            BKK : 17,
            BCN : 11,
            BJS : 7,
            BGO : 7,
            BER : 14,
            BIQ : 2,
            BRU : 24,
            BUD : 14,
            CKG : 4,
            CPH : 25,
            DEL : 3,
            DXB : 6,
            DBV : 7,
            DUS : 24,
            SVX : 4,
            FRA : 14,
            GVA : 14,
            GOT : 25,
            GZP : 3,
            HAM : 16,
            HKG : 7,
            IVL : 20,
            JOE : 30,
            JYV : 23,
            KAJ : 22,
            KEM : 20,
            KTT : 25,
            KOK : 19,
            KRK : 4,
            KUO : 47,
            KUU : 10,
            LJU : 4,
            LON : 35,
            MAD : 7,
            AGP : 11,
            MAN : 14,
            MHQ : 11,
            MIA : 3,
            MIL : 14,
            MOW : 25,
            MUC : 14,
            NGO : 7,
            NYC : 7,
            NCE : 4,
            OSA : 7,
            OSL : 23,
            OUL : 58,
            PAR : 35,
            PSA : 2,
            PRG : 14,
            RIX : 17,
            ROM : 14,
            RVN : 26,
            SVL : 10,
            SEL : 7,
            PVG : 7,
            SIN : 7,
            LED : 14,
            STO : 63,
            TLL : 39,
            TMP : 31,
            TAY : 6,
            TLV : 2,
            TYO : 7,
            YTO : 3,
            TOS : 1,
            TKU : 31,
            VAA : 39,
            VCE : 5,
            VIE : 14,
            VNO : 14,
            WAW : 14,
            XIY : 3,
            ZRH : 24,
            KAO : 10,
            TCI : 5,
            LPA : 5,
            KZN : 3,
            GOJ : 3,
            KUF : 3,
            SPU : 2,
            MLA : 2,
            DUB : 6,
            CHI : 5,
            FNC : 1,
            GDN : 7,
            LLA : 7,
            UME : 7,
            VBY : 3,
            SZG : 1,
            FUE : 2,
            ACE : 1,
            BLL : 7,
            EDI : 21,
            PUY : 14,
            VRN : 1,
            VAR : 7,
            RMI : 1,
            ENF : 1,
            ALC : 4,
            MAH : 0,
            IBZ : 0,
            REK : 7,
            SFO : 3,
            TSE : 2,
        };

    var countryCodes = {
        AAR : "dk",
        ABQ : "mx",
        ADL : "au",
        AGP : "es",
        AKL : "nz",
        ALC : "es",
        AMS : "nl",
        ANC : "us",
        ATL : "us",
        AYT : "tr",
        BCN : "es",
        BDL : "us",
        BER : "de",
        BGO : "no",
        BHM : "gb",
        BIQ : "fr",
        BJS : "cn",
        BKI : "my",
        BKK : "th",
        BNE : "au",
        BOM : "in",
        BOS : "us",
        BRU : "be",
        BUD : "hu",
        BUH : "ro",
        BWI : "us",
        CGK : "id",
        CHI : "us",
        CKG : "cn",
        CLE : "us",
        CLT : "us",
        CMB : "lk",
        CNS : "au",
        CNX : "th",
        CPH : "dk",
        CPT : "za",
        CUN : "mx",
        CVG : "us",
        DBV : "hr",
        DEL : "in",
        DEN : "us",
        DFW : "us",
        DPS : "id",
        DRW : "au",
        DTT : "us",
        DUB : "ie",
        DUS : "de",
        DXB : "ae",
        ENF : "fi",
        FRA : "de",
        FWA : "us",
        GDN : "pl",
        GOI : "in",
        GOT : "se",
        GVA : "ch",
        GZP : "tr",
        HAM : "de",
        HAN : "vn",
        HEL : "fi",
        HKG : "hk",
        HKT : "th",
        HNL : "us",
        HOU : "us",
        IAH : "us",
        IBZ : "es",
        IEV : "ua",
        IND : "us",
        IVL : "fi",
        JNB : "za",
        JOE : "fi",
        JYV : "fi",
        KAJ : "fi",
        KAO : "fi",
        KCH : "my",
        KEM : "fi",
        KHH : "tw",
        KOK : "fi",
        KRK : "pl",
        KTM : "np",
        KTT : "fi",
        KUL : "my",
        KUO : "fi",
        LAS : "us",
        LAX : "us",
        LED : "ru",
        LIS : "pt",
        LGK : "my",
        LJU : "si",
        LON : "gb",
        LYS : "fr",
        MAA : "in",
        MAD : "es",
        MAN : "gb",
        MCO : "us",
        MEL : "au",
        MEM : "us",
        MEX : "mx",
        MHQ : "fi",
        MIA : "us",
        MIL : "it",
        MNL : "ph",
        MOW : "ru",
        MSP : "us",
        MSQ : "by",
        MSY : "us",
        MUC : "de",
        NCE : "fr",
        NGO : "jp",
        NOU : "nc",
        NRK : "se",
        SKG : "gr",
        NYC : "us",
        OMA : "us",
        ORL : "us",
        OSA : "jp",
        OSL : "no",
        OUL : "fi",
        PAR : "fr",
        PDX : "us",
        PEN : "my",
        PER : "au",
        PHL : "us",
        PHX : "us",
        PIT : "us",
        PMI : "es",
        PNH : "kh",
        POR : "fi",
        PRG : "cz",
        PSA : "it",
        PUS : "kr",
        PVG : "cn",
        RDU : "us",
        REK : "is",
        REP : "kh",
        RGN : "mm",
        RIC : "us",
        RIX : "lv",
        ROM : "it",
        RVN : "fi",
        SAN : "us",
        SEA : "us",
        SEL : "kr",
        SFO : "us",
        SGN : "vn",
        SHA : "cn",
        SIN : "sg",
        SJU : "pr",
        SJY : "fi",
        SLC : "us",
        SMF : "us",
        SOF : "bg",
        SPK : "jp",
        STL : "us",
        STO : "se",
        STR : "de",
        SUB : "id",
        SVL : "fi",
        SVX : "ru",
        SYD : "au",
        SYX : "cn",
        TAY : "ee",
        TDX : "th",
        TGD : "cs",
        TIA : "al",
        TKU : "fi",
        TLL : "ee",
        TLV : "il",
        TMP : "fi",
        TOS : "no",
        TPA : "us",
        TPE : "tw",
        TRD : "no",
        TYO : "jp",
        UME : "se",
        USM : "th",
        VAA : "fi",
        VCE : "it",
        VIE : "at",
        VNO : "lt",
        VRK : "fi",
        WAS : "us",
        WAW : "pl",
        YTO : "ca",
        YUL : "ca",
        YVR : "ca",
        YYC : "ca",
        ZAG : "hr",
        ZRH : "ch",
        KBV : "th",
        TCI : "es",
        LPA : "es",
        INN : "at",
        PFO : "cy",
        NAP : "it",
        CTA : "it",
        DLM : "tr",
        RHO : "gr",
        CHQ : "gr",
        HER : "gr",
        KGS : "gr",
        ATH : "gr",
        MAH : "es",
        MLA : "mt",
        KZN : "ru",
        GOJ : "ru",
        KUF : "ru",
        SPU : "hr",
        XIY : "cn",
        SIA : "cn",
        YMQ : "ca",
        FUE : "es",
        ACE : "es",
        FNC : "pt",
        LLA : "se",
        VBY : "se",
        VDA : "il",
        UMA : "se",
        ARN : "se",
        CDG : "fr",
        FCO : "it",
        ICN : "kr",
        JFK : "us",
        KIX : "jp",
        LHR : "gb",
        MXP : "it",
        NRT : "jp",
        PEK : "cn",
        SVO : "ru",
        TXL : "de",
        YYZ : "ca",
        ORD : "us",
        ODT : "ro",
        KBP : "ua",
        EDI : "gb",
        SZG : "at",
        BLL : "dk",
        ZTH : "gr",
        PUY : "hr",
        JSI : "gr",
        JTR : "gr",
        MJT : "gr",
        PVK : "gr",
        TFN : "es",
        VAR : "bg",
        VRN : "it",
        RMI : "it",
        FUK : "jp",
        CAN : "cn",
        Lapland : "fi",
        TH : "th",
        HR : "hr",
        FI : "fi",
        CN : "cn",
        DE : "de",
        IT : "it",
        IN : "in",
        HK : "hk",
        FR : "fr",
        GB : "gb",
        NO : "no",
        KR : "kr",
        ES : "es",
        DK : "dk",
        JP : "jp",
        NL : "nl",
        SE : "se",
        IL : "il",
        US : "us",
        PL : "pl",
        EE : "ee",
        AU : "au",
        POP : "do",
        PVR : "mx",
        HAV : "cu",
        MX : "mx",
        DO : "do",
        CU : "cu",
        NKG : "cn",
        };

    var destinationCodes = [
            'AAR',
            'ABQ',
            'ADL',
            'AGP',
            'AKL',
            'ALC',
            'AMS',
            'ANC',
            'ATL',
            'AYT',
            'BCN',
            'BDL',
            'BER',
            'BGO',
            'BHM',
            'BIQ',
            'BJS',
            'BKI',
            'BKK',
            'BNE',
            'BOM',
            'BOS',
            'BRU',
            'BUD',
            'BUH',
            'BWI',
            'CGK',
            'CHI',
            'CKG',
            'CLE',
            'CLT',
            'CMB',
            'CNS',
            'CNX',
            'CPH',
            'CPT',
            'CUN',
            'CVG',
            'DBV',
            'DEL',
            'DEN',
            'DFW',
            'DPS',
            'DRW',
            'DTT',
            'DUB',
            'DUS',
            'DXB',
            'ENF',
            'FRA',
            'FWA',
            'GDN',
            'GOI',
            'GOT',
            'GVA',
            'GZP',
            'HAM',
            'HAN',
            'HEL',
            'HKG',
            'HKT',
            'HNL',
            'HOU',
            'IAH',
            'IBZ',
            'IEV',
            'IND',
            'IVL',
            'JNB',
            'JOE',
            'JYV',
            'KAJ',
            'KAO',
            'KCH',
            'KEM',
            'KHH',
            'KOK',
            'KRK',
            'KTM',
            'KTT',
            'KUL',
            'KUO',
            'LAS',
            'LAX',
            'LED',
            'LIS',
            'LGK',
            'LJU',
            'LON',
            'LYS',
            'MAA',
            'MAD',
            'MAN',
            'MCO',
            'MEL',
            'MEM',
            'MEX',
            'MHQ',
            'MIA',
            'MIL',
            'MNL',
            'MOW',
            'MSP',
            'MSQ',
            'MSY',
            'MUC',
            'NCE',
            'NGO',
            'NOU',
            'NRK',
            'SKG',
            'NYC',
            'OMA',
            'ORL',
            'OSA',
            'OSL',
            'OUL',
            'PAR',
            'PDX',
            'PEN',
            'PER',
            'PHL',
            'PHX',
            'PIT',
            'PMI',
            'PNH',
            'POR',
            'PRG',
            'PSA',
            'PUS',
            'PVG',
            'RDU',
            'REK',
            'REP',
            'RGN',
            'RIC',
            'RIX',
            'ROM',
            'RVN',
            'SAN',
            'SEA',
            'SEL',
            'SFO',
            'SGN',
            'SHA',
            'SIN',
            'SJU',
            'SJY',
            'SLC',
            'SMF',
            'SOF',
            'SPK',
            'STL',
            'STO',
            'STR',
            'SUB',
            'SVL',
            'SVX',
            'SYD',
            'SYX',
            'TAY',
            'TDX',
            'TGD',
            'TIA',
            'TKU',
            'TLL',
            'TLV',
            'TMP',
            'TOS',
            'TPA',
            'TPE',
            'TRD',
            'TYO',
            'UME',
            'USM',
            'VAA',
            'VCE',
            'VIE',
            'VNO',
            'VRK',
            'WAS',
            'WAW',
            'YTO',
            'YUL',
            'YVR',
            'YYC',
            'ZAG',
            'ZRH',
            'KBV',
            'TCI',
            'LPA',
            'INN',
            'PFO',
            'NAP',
            'CTA',
            'DLM',
            'RHO',
            'CHQ',
            'HER',
            'KGS',
            'ATH',
            'MAH',
            'MLA',
            'KZN',
            'GOJ',
            'KUF',
            'SPU',
            'XIY',
            'SIA',
            'YMQ',
            'FUE',
            'ACE',
            'FNC',
            'LLA',
            'VBY',
            'VDA',
            'UMA',
            'ARN',
            'CDG',
            'FCO',
            'ICN',
            'JFK',
            'KIX',
            'LHR',
            'MXP',
            'NRT',
            'PEK',
            'SVO',
            'TXL',
            'YYZ',
            'ORD',
            'ODT',
            'KBP',
            'EDI',
            'SZG',
            'BLL',
            'ZTH',
            'PUY',
            'JSI',
            'JTR',
            'MJT',
            'PVK',
            'TFN',
            'VAR',
            'VRN',
            'RMI',
            'FUK',
            'CAN',
            'Lapland',
            'TH',
            'HR',
            'FI',
            'CN',
            'DE',
            'IT',
            'IN',
            'HK',
            'FR',
            'GB',
            'NO',
            'KR',
            'ES',
            'DK',
            'JP',
            'NL',
            'SE',
            'IL',
            'US',
            'PL',
            'EE',
            'AU',
            'POP',
            'PVR',
            'HAV',
            'MX',
            'DO',
            'CU',
            'NKG'
    ];
    
    var continentNames = {
        FI: "Finland",
        SC: "Scandinavia",
        BL: "Baltics",
        EU: "Europe",
        AS: "Asia",
        OC: "Oceania",
        NA: "Americas",
        ME: "Middle East"
    }

    var mapElements = {
        $mapRef: $('#map'),
        $selectRegion: $('#selectRegion'),
        $selectActivity: $('#selectActivity'),
        $filteredDestinations: $('#filtered-destinations'),
        $resultHeading: $('#result-heading'),
        $destinationList: $('.destination-list-container'),
        $noResultsContainer: $('#no-results-container'),
        $singleDestinationContainer: $('#single-destination-container'),
        $closeButton: $('.close-alert__btn'),
        $mapStatus: $('#mapStatus')
    }


    var mapSettings = {
        allDestDataUrl: "https://www.finnair.com/us/gb/offers?PAGE=AJAX&ENTITY=content&DIALOG_KEY=destination_map_allData_json_v2",
        mapStylesUrl: "https://www.finnair.com/go/2018.1-121/assets/js/json/googleMapStyles.json",
        baseUrl: "https://www.finnair.com/go/2018.1-121",
        assetsUrl: "https://www.finnair.com/go/2018.1-121/assets-6/",
        markers: {},
        markersFiltered: {}
    }

    var mapData = {
        filtered: [],
        array: []
    }