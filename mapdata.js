var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "700", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    
    
    //State defaults
    state_description: "State description",
    state_color: "#CFCFCF",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 2.5,
    all_states_inactive: "yes",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "",
    location_url: "",
    location_color: "#EA4715",
    location_hover_color: "#EA4715",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 85,
    location_type: "image",
    location_image_source: "jessore.png",
    location_border_color: "#000",
    location_border: 2.5,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "#F0F0F0",
    popup_opacity: 0.9,
    popup_shadow: 0,
    popup_corners: 8,
    popup_font: "12px/1.5 Red Hat Display, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    BGD1806: {
      name: "Dhaka"
    },
    BGD2432: {
      name: "Khulna"
    },
    BGD2475: {
      name: "Barisal"
    },
    BGD2476: {
      name: "Chittagong"
    },
    BGD2488: {
      name: "Sylhet"
    },
    BGD3255: {
      name: "Rajshahi"
    },
    BGD5492: {
      name: "Rangpur"
    },
    BGD3123: {
      name: "sass"
    },
  },
  locations: {
    "0": {
      lat: "23.723056",
      lng: "90.408611",
      name: "",
      // description: "Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Dhanmondi, Dhaka-1209"
      description: `
        <div style="padding:0px 10px;"> 
          <h3 style="font-size:18px;"><i style="color:#EA4715;" class="fa fa-city"></i> Dhaka Branches</h3>
            <hr class="heading-border">
              <div id="address">
                <h4>Dhanmondi Branch</h4>
                <hr class="sub-heading-border">
                <ul id="address">
                  <li id="map-icon"><p class="details-map">Green Plaza, 4th Floor Plot-B, Road-8/A Satmasjid Road, Dhanmondi, Dhaka-1209</p></li>
                  <li id="phone-icon"> <p class="details-map">+880-4-0937432</p></li>
                  <li><p style="margin-left: 15px;margin-top: -10px;">+8809370272634</li>
                </ul>
              </div>
              <div id="address">
                <h4>Motijheel Branch</h4>
                <hr class="sub-heading-border">
                <ul id="address">
                  <li id="map-icon"><p class="details-map">Rokon Bhaban, 2nd Floor Room # 205, 49 Motijheel C/A Dhaka-1000</p></li>
                  <li id="phone-icon"> <p class="details-map">+880028397732</p></li>
                  <li><p style="margin-left: 15px;margin-top: -10px;">+880289376378</li>
                </ul>
              </div>
        </div>
      `
    },
    "1": {
      lat: "23.251314",
      lng: "90.851784",
      name: "Chadpur",
    },
    "2": {
      lat: "23.460657",
      lng: "91.180908",
      name: "Cumilla",
    },
    "3": {
      lat: "24.426046",
      lng: "90.982063",
      name: "Kishoreganj",
    },
    "4": {
      lat: "24.391743",
      lng: "89.994827",
      name: "Tangail",
    },
    "5": {
      lat: "23.1665256",
      lng: "89.2094419",
      name: "Jessore",
    },
  },
  labels: {},
  legend: {
    entries: []
  },
  regions: {}
};