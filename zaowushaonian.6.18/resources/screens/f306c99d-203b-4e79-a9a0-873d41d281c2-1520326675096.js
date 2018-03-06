jQuery("#simulation")
  .on("click", ".s-f306c99d-203b-4e79-a9a0-873d41d281c2 .click", function(event, data) {
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#C2C2C2",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#C2C2C2",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_2 span": {
                      "attributes": {
                        "color": "#1C1926",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_3 span": {
                      "attributes": {
                        "color": "#1C1926",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_4 span": {
                      "attributes": {
                        "color": "#1C1926",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#1C1926",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
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
                    "target": "#s-Panel_2",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_2 span": {
                      "attributes": {
                        "color": "#1C1926",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_3 span": {
                      "attributes": {
                        "color": "#1C1926",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#C2C2C2",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#C2C2C2",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_4 span": {
                      "attributes": {
                        "color": "#1C1926",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
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
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-f306c99d-203b-4e79-a9a0-873d41d281c2 #s-Text_5 span": {
                      "attributes": {
                        "color": "#1C1926",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
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
                    "target": "screens/6911d6d1-ef18-4173-9b3f-b2e1203512c3",
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
    }
  })
  .on("pageload", ".s-f306c99d-203b-4e79-a9a0-873d41d281c2 .pageload", function(event, data) {
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