jQuery("#simulation")
  .on("click", ".s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1b6f4775-babe-4796-9e11-912e6b75dacf",
                    "transition": "fade"
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
                    "target": "screens/3b4f5c19-1c70-400d-be6f-9eb9c4c01782",
                    "transition": "fade"
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/10444a4f-ea68-428e-92de-c93996d16069",
                    "transition": "fade"
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
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f306c99d-203b-4e79-a9a0-873d41d281c2",
                    "transition": "fade"
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
    } else if(jFirer.is("#s-Hotspot_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3b4f5c19-1c70-400d-be6f-9eb9c4c01782",
                    "transition": "fade"
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
    } else if(jFirer.is("#s-Rectangle_12")) {
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
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#FFDA5A",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDA5A",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDA5A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFDA5A",
                        "border-radius": "2px 0px 0px 2px",
                        "line-height": "20px",
                        "font-size": "11.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_12": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDA5A",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDA5A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFDA5A",
                        "border-radius": "2px 0px 0px 2px",
                        "-pie-background": "#FFDA5A",
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
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#000000",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDA5A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFDA5A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDA5A",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 2px 2px 0px",
                        "line-height": "20px",
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_14 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_14": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDA5A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFDA5A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDA5A",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 2px 2px 0px",
                        "-pie-background": "#000000",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_14")) {
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
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_12": {
                      "attributes": {
                        "background-color": "#000000",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDA5A",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDA5A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFDA5A",
                        "border-radius": "2px 0px 0px 2px",
                        "line-height": "20px",
                        "font-size": "11.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_12 span": {
                      "attributes": {
                        "color": "#C9C9C9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_12": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDA5A",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDA5A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFDA5A",
                        "border-radius": "2px 0px 0px 2px",
                        "-pie-background": "#000000",
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
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_14": {
                      "attributes": {
                        "background-color": "#FFDA5A",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDA5A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFDA5A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDA5A",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 2px 2px 0px",
                        "line-height": "20px",
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_14 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 #s-Rectangle_14": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDA5A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFDA5A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDA5A",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 2px 2px 0px",
                        "-pie-background": "#FFDA5A",
                        "-pie-poll": "false"
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
    }
  })
  .on("pageload", ".s-6911d6d1-ef18-4173-9b3f-b2e1203512c3 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_23",
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