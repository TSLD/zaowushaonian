jQuery("#simulation")
  .on("click", ".s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_291")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ab5155d1-a71d-4b67-8b3b-66ef6d5ad627",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#21A8B8",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#21A8B8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#21A8B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#21A8B8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#21A8B8",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#21A8B8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#21A8B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#21A8B8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#21A8B8",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#21A8B8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#21A8B8",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#21A8B8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#21A8B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#21A8B8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#21A8B8",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#21A8B8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#21A8B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#21A8B8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#21A8B8",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#21A8B8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#21A8B8",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#21A8B8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#21A8B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#21A8B8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#21A8B8",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#21A8B8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#21A8B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#21A8B8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#21A8B8",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#21A8B8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_2 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_3 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_5": {
                      "attributes": {
                        "background-color": "#E9E9E9",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E9E9E9",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E9E9E9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E9E9E9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E9E9E9",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#E9E9E9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#21A8B8",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#21A8B8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#21A8B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#21A8B8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#21A8B8",
                        "border-radius": "3px 3px 3px 3px"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#21A8B8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#21A8B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#21A8B8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#21A8B8",
                        "border-radius": "3px 3px 3px 3px",
                        "-pie-background": "#21A8B8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_4 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 #s-Text_5 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3b4f5c19-1c70-400d-be6f-9eb9c4c01782",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-320e72f1-d0ad-4d1b-a3bd-e3d9a7a90db1 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_99")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_99",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });