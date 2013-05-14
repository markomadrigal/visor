var sources = {
    
    idef: {
        url: "http://idef.formosa.gob.ar/servicios/idef/wms?",
        title: "IDE Formosa",
        version:"1.1.1"
    },
    dec: {
        url:"http://idef.formosa.gob.ar/servicios/dec/wms?",
        title:"Dirección de Estadística y Censo",
        version:"1.1.1"
    },
    dgct: {
        url: "http://idef.formosa.gob.ar/servicios/dgct/wms?",
        title: "Dirección General del Catastro Territorial",
        version:"1.1.1"
    },
    dpv: {
        url:"http://idef.formosa.gob.ar/servicios/dpv/wms?",
        title:"Dirección Provincial de Vialidad",
        version:"1.1.1"
    },
    educ: {
        url:"http://idef.formosa.gob.ar/servicios/mce/wms?",
        title:"Ministerio de Cultura y Educación",
        version:"1.1.1"
    },
    upca: {
        url:"http://idef.formosa.gob.ar/servicios/upca/wms?",
        title:"Unidad Provincial Coordinadora del Agua",
        version:"1.1.1"
    },

    /*idefcacheado: {
       url: "http://idef.formosa.gob.ar/servicios/gwc/service/wms?", //SERVICE=WMS&VERSION=1.1.1&REQUEST=getcapabilities&TILED=true?",
       title: "IDE Formosa Cacheado",
       version:"1.1.1"
    },*/
    
    ign: {
        url:"http://wms.ign.gob.ar/geoserver/wms?",
        title:"Instituto Geográfico Nacional",
        version:"1.1.1"
    },
    ol: {
        ptype: "gxp_olsource"
    },
    google: {
        ptype: "gxp_googlesource"
    }

    /*,
    csw: {
        ptype: "gxp_cataloguesource",
        url: "http://idef.formosa.gob.ar/metadatos/srv/es/csw?SERVICE=CSW&REQUEST=GetCapabilities",
        title: "Catalogo"
    }*/
};