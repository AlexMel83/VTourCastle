(function(){
    var script = {
 "defaultVRPointer": "laser",
 "class": "Player",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "overflow": "visible",
 "minHeight": 20,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "borderSize": 0,
 "definitions": [{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_123148_00_061",
 "id": "panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_121848_00_049",
 "id": "panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_122248_00_056",
 "id": "panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_122333_00_057",
 "id": "panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53.25,
  "pitch": 1.43,
  "hfov": 110
 },
 "id": "panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_121513_00_045",
 "id": "panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_124038_00_070",
 "id": "panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A",
   "camera": "this.panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C",
   "camera": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
   "camera": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "camera": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
   "camera": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
   "camera": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211",
   "camera": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869",
   "camera": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D",
   "camera": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F",
   "camera": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A",
   "camera": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD",
   "camera": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6",
   "camera": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549",
   "camera": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6",
   "camera": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9",
   "camera": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA",
   "camera": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 141.37,
  "pitch": 0,
  "hfov": 20
 },
 "id": "camera_5A78ADB2_467C_4550_41A5_9038EFCAAB98"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.5,
  "pitch": 0.19,
  "hfov": 20
 },
 "id": "panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -67.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5A9DFDE1_467C_44F0_41B1_A748BC197452"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_122111_00_053",
 "id": "panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_121720_00_048",
 "id": "panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_123329_00_064",
 "id": "panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 141.37,
  "pitch": 0,
  "hfov": 20
 },
 "id": "camera_5A723DA2_467C_4570_41B7_484C0AB554FC"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_123407_00_065",
 "id": "panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.32,
  "pitch": 0,
  "hfov": 20
 },
 "id": "camera_5A673DC1_467C_4530_41C8_B1F40692A94F"
},
{
 "items": [
  {
   "media": "this.panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A",
   "camera": "this.panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C",
   "camera": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
   "camera": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "camera": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
   "camera": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
   "camera": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211",
   "camera": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869",
   "camera": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D",
   "camera": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F",
   "camera": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A",
   "camera": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD",
   "camera": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6",
   "camera": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549",
   "camera": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6",
   "camera": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9",
   "camera": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_121142_00_040",
 "id": "panorama_4F55B52D_45AC_4570_41C6_91A10727E71C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A",
   "backwardYaw": -54.24,
   "yaw": 124.68,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "backwardYaw": 112.69,
   "yaw": -38.63,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "backwardYaw": 112.69,
   "yaw": -37.64,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_50706E68_45EC_47F0_41C9_727962B43B96",
  "this.overlay_50FE1B7E_45D4_4DD0_41CF_0AEB7067F018",
  "this.overlay_5F8463C3_45D4_5D30_41C8_8DC95176DB79"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_121407_00_044",
 "id": "panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_50EB3E6F_45DC_C7F0_41B9_BE0C4DFD9C4B",
  "this.overlay_5D0D24A5_45B4_7B70_41C4_CE4167EF1FD7"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C",
   "backwardYaw": -38.63,
   "yaw": 112.69,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C",
   "backwardYaw": -38.63,
   "yaw": 113.45,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -67.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5A952DD1_467C_44D0_41CD_23969C1D85A5"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_122017_00_052",
 "id": "panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_123930_00_069",
 "id": "panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_121223_00_041",
 "id": "panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_123054_00_060",
 "id": "panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 125.76,
  "pitch": 0,
  "hfov": 110
 },
 "id": "camera_5A6FEDD1_467C_44D0_41C9_1B78725D874A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_camera"
},
{
 "thumbnailUrl": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20241117_120928_00_039",
 "id": "panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C",
   "backwardYaw": 124.68,
   "yaw": -54.24,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_50E3F68E_45F4_4730_41A2_986D47327398"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "minHeight": 50,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "height": 641,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 573,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "height": 133,
 "top": 15,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "--STICKER"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.64,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "overflow": "visible",
 "minHeight": 1,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "bottom": 0,
 "minWidth": 1,
 "borderSize": 0,
 "height": 118,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "data": {
  "name": "--INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "data": {
  "name": "--INFO photoalbum"
 },
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "data": {
  "name": "--LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "data": {
  "name": "--FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "data": {
  "name": "--REALTOR"
 },
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#04A3E1",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "textShadowColor": "#000000",
 "class": "Label",
 "fontWeight": "normal",
 "textShadowVerticalLength": 0,
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 31.75,
 "paddingLeft": 0,
 "data": {
  "name": "\u043c.\u0421\u0442\u0430\u0440\u043e\u043a\u043e\u0441\u0442\u044f\u043d\u0442\u0438\u043d\u0456\u0432, \u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u044c\u043a\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 },
 "paddingRight": 0,
 "fontFamily": "Bebas Neue Book",
 "width": 573,
 "minHeight": 1,
 "text": "the city of Starokostiantyniv",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "height": 46,
 "top": 94.25,
 "fontSize": 41,
 "textShadowOpacity": 1,
 "shadow": false,
 "textShadowHorizontalLength": 0,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none",
 "horizontalAlign": "left"
},
{
 "textShadowColor": "#000000",
 "class": "Label",
 "fontWeight": "bold",
 "textShadowVerticalLength": 0,
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 28.25,
 "paddingLeft": 0,
 "data": {
  "name": "\u0417\u0430\u043c\u043e\u043a \u043a\u043d\u044f\u0437\u0456\u0432 \u041e\u0441\u0442\u0440\u043e\u0437\u044c\u043a\u0438\u0445"
 },
 "paddingRight": 0,
 "fontFamily": "Bebas Neue Bold",
 "width": 570,
 "minHeight": 1,
 "text": "Ostrozki castle",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "height": 90,
 "top": 8.3,
 "fontSize": 90,
 "textShadowOpacity": 1,
 "shadow": false,
 "textShadowHorizontalLength": 0,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none",
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "width": 58,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "width": 58,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "width": 58,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "width": 58,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "horizontalAlign": "center"
},
{
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58,
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "paddingRight": 0,
 "maxHeight": 37,
 "right": 30,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "bottom": 8,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 75,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 49,
 "horizontalAlign": "center"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -38.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0_HS_0_1_0_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.41,
   "hfov": 30.41
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0_HS_0_0.png",
      "width": 862,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.41,
   "roll": 0,
   "yaw": -38.63
  }
 ],
 "id": "overlay_50706E68_45EC_47F0_41C9_727962B43B96",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_5A952DD1_467C_44D0_41CD_23969C1D85A5); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "\u0423\u0432\u0456\u0439\u0442\u0438"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 124.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0_HS_1_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.49,
   "hfov": 31.58
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 124.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_587E36AC_45B4_C770_41CA_FC43A6260174",
   "pitch": -23.49,
   "hfov": 31.58,
   "distance": 100
  }
 ],
 "id": "overlay_50FE1B7E_45D4_4DD0_41CF_0AEB7067F018",
 "data": {
  "label": "Circle Point 02c"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A, this.camera_5A6FEDD1_467C_44D0_41C9_1B78725D874A); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -37.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.4,
   "hfov": 16.66
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -37.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_587EF6AC_45B4_C770_41B7_5926F33972F8",
   "pitch": -44.4,
   "hfov": 16.66,
   "distance": 100
  }
 ],
 "id": "overlay_5F8463C3_45D4_5D30_41C8_8DC95176DB79",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_5A9DFDE1_467C_44F0_41B1_A748BC197452); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "\u0423\u0432\u0456\u0439\u0442\u0438"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 112.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.41,
   "hfov": 22.47
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 112.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_587E96AC_45B4_C770_41BD_76A803F01B46",
   "pitch": -34.41,
   "hfov": 22.47,
   "distance": 100
  }
 ],
 "id": "overlay_50EB3E6F_45DC_C7F0_41B9_BE0C4DFD9C4B",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C, this.camera_5A723DA2_467C_4570_41B7_484C0AB554FC); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "\u0412\u0438\u0439\u0442\u0438"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 113.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0_HS_1_1_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.86,
   "hfov": 22.57
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0_HS_1_0.png",
      "width": 756,
      "class": "ImageResourceLevel",
      "height": 1761
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.86,
   "roll": 0,
   "yaw": 113.45
  }
 ],
 "id": "overlay_5D0D24A5_45B4_7B70_41C4_CE4167EF1FD7",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C, this.camera_5A78ADB2_467C_4550_41A5_9038EFCAAB98); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "\u0412\u0438\u0439\u0442\u0438"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -54.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.44,
   "hfov": 7.08
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -54.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5D340FAB_45D4_C570_41BE_9BDBD8A1AEA6",
   "pitch": 19.44,
   "hfov": 7.08,
   "distance": 100
  }
 ],
 "id": "overlay_50E3F68E_45F4_4730_41A2_986D47327398",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C, this.camera_5A673DC1_467C_4530_41C8_B1F40692A94F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 110,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "91.304%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "85.959%",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "center"
},
{
 "class": "Image",
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 2,
 "right": "0%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "propagateClick": true,
 "bottom": 53,
 "minWidth": 1,
 "borderSize": 0,
 "height": 2,
 "shadow": false,
 "data": {
  "name": "white line"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 3000,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "paddingLeft": 30,
 "paddingRight": 0,
 "width": 1199,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "height": 51,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "paddingRight": 0,
 "right": "10%",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "minHeight": 1,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "layout": "vertical",
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "horizontalAlign": "right"
},
{
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "paddingRight": 0,
 "right": "10%",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "overflow": "scroll",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "minHeight": 1,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "layout": "vertical",
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "horizontalAlign": "right"
},
{
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "overflow": "visible",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "minHeight": 1,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "paddingRight": 0,
 "right": "10%",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "overflow": "scroll",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "minHeight": 1,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "layout": "vertical",
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "horizontalAlign": "right"
},
{
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "overflow": "visible",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "minHeight": 1,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "overflow": "visible",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "minHeight": 1,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingRight": 0,
 "right": "15%",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "minHeight": 1,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowHorizontalLength": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "paddingRight": 0,
 "right": "10%",
 "paddingLeft": 0,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "minHeight": 1,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "layout": "vertical",
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderSize": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "horizontalAlign": "right"
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_587E36AC_45B4_C770_41CA_FC43A6260174",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_587EF6AC_45B4_C770_41B7_5926F33972F8",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_587E96AC_45B4_C770_41BD_76A803F01B46",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5D340FAB_45D4_C570_41BE_9BDBD8A1AEA6",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_4E62335A_45AC_5DD0_41D0_51433BF9574A_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "width": 60,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "shadow": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "horizontalAlign": "center"
},
{
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "horizontalAlign": "center"
},
{
 "class": "Button",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button house info"
 },
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "width": 120,
 "shadowSpread": 1,
 "iconHeight": 0,
 "shadowColor": "#000000",
 "minHeight": 1,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 40,
 "label": "HOUSE INFO",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center"
},
{
 "class": "Button",
 "layout": "horizontal",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button panorama list"
 },
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "width": 130,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "minHeight": 1,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 40,
 "label": "PANORAMA LIST",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center"
},
{
 "class": "Button",
 "layout": "horizontal",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button location"
 },
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "width": 90,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "minHeight": 1,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 40,
 "label": "LOCATION",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center"
},
{
 "class": "Button",
 "layout": "horizontal",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button floorplan"
 },
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "width": 103,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "minHeight": 1,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 40,
 "label": "FLOORPLAN",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center"
},
{
 "class": "Button",
 "layout": "horizontal",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button photoalbum"
 },
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "width": 112,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "minHeight": 1,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 40,
 "label": "PHOTOALBUM",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center"
},
{
 "class": "Button",
 "layout": "horizontal",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button realtor"
 },
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "width": 90,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "minHeight": 1,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 40,
 "label": "REALTOR",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "85%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "50%",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51,
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "85%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "50%",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51,
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingRight": 0,
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "propagateClick": false,
 "height": 140,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left"
},
{
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontColor": "#666666",
 "paddingLeft": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemBackgroundColorDirection": "vertical",
 "scrollBarWidth": 10,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "itemLabelGap": 7,
 "borderRadius": 5,
 "paddingBottom": 70,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 125,
 "borderSize": 0,
 "itemMode": "normal",
 "itemOpacity": 1,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#04A3E1",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "gap": 26,
 "backgroundColor": [
  "#000000"
 ],
 "itemLabelFontFamily": "Montserrat",
 "itemMaxHeight": 1000,
 "width": "100%",
 "shadow": false,
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemThumbnailWidth": 220,
 "itemThumbnailShadow": false,
 "itemLabelPosition": "bottom",
 "itemHorizontalAlign": "center",
 "class": "ThumbnailGrid",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingLeft": 3,
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadow": true,
 "itemBackgroundOpacity": 0,
 "paddingRight": 70,
 "backgroundOpacity": 0.05,
 "scrollBarOpacity": 0.5,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowVerticalLength": 0,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemMaxWidth": 1000,
 "itemThumbnailOpacity": 1,
 "height": "100%",
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "itemHeight": 156,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 14,
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "85%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "15%",
 "minWidth": 400,
 "scrollBarColor": "#0069A3",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51,
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingRight": 0,
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "propagateClick": false,
 "height": 140,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left"
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "paddingTop": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "paddingRight": 0,
 "paddingLeft": 0,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "propagateClick": false,
 "height": 140,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "55%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "45%",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51,
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "class": "IconButton",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "class": "Image",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 1000,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "overflow": "scroll",
 "minHeight": 520,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": 370,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "right": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 1,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "class": "ViewerArea",
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "bottom": 0,
 "toolTipFontFamily": "Arial",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "class": "Container",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "height": "100%",
 "borderSize": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container arrows"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "overflow": "scroll",
 "minHeight": 520,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": 370,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "class": "HTMLText",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "paddingLeft": 80,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 100,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "77.115%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "height": "100%",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "class": "IconButton",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "right": 20,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "right"
},
{
 "class": "WebFrame",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "propagateClick": false,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "overflow": "scroll",
 "minHeight": 520,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": 370,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "class": "HTMLText",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "paddingLeft": 80,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 100,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "77.115%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "height": "100%",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "right": 20,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "right"
},
{
 "class": "HTMLText",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "paddingLeft": 80,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 100,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "77.115%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "height": "100%",
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "class": "IconButton",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "right": 20,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "minHeight": 50,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "right"
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 1,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "right": 10,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 1,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "right": 10,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "right": 20,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "top": 20,
 "minWidth": 50,
 "borderSize": 0,
 "width": "10%",
 "mode": "push",
 "height": "10%",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "horizontalAlign": "right"
},
{
 "class": "Image",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 1000,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "bottom",
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "shadow": false,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right"
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "overflow": "scroll",
 "minHeight": 520,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79,
 "horizontalAlign": "left"
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": 370,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.7vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.7vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.7vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.7vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.6vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "class": "Button",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "backgroundOpacity": 0.7,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "minHeight": 1,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "minWidth": 1,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "46%",
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 150,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "minHeight": 70,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "minWidth": 70,
 "borderSize": 0,
 "width": "12%",
 "mode": "push",
 "height": "8%",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 150,
 "horizontalAlign": "center"
},
{
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "80%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "30%",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container separator"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 150,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "minHeight": 70,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "minWidth": 70,
 "borderSize": 0,
 "width": "12%",
 "mode": "push",
 "height": "8%",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 150,
 "horizontalAlign": "center"
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.7vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.7vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "class": "Button",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "backgroundOpacity": 0.7,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "minHeight": 1,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "mode": "push",
 "minWidth": 1,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "46%",
 "horizontalAlign": "center"
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "class": "Button",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontStyle": "normal",
 "paddingRight": 0,
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "paddingLeft": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "width": 207,
 "minHeight": 1,
 "fontWeight": "normal",
 "backgroundOpacity": 0.7,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 59,
 "label": "lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "fontSize": 34,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center"
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 10,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.95vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "class": "Container",
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "class": "Image",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 200,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "width": "25%",
 "height": "100%",
 "horizontalAlign": "left",
 "shadow": false,
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 200
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 10,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "width": "75%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.8vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.8vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.8vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "shadow": false,
 "scripts": {
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getKey": function(key){  return window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
