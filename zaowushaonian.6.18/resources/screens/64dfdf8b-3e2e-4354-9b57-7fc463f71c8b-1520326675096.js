jQuery("#simulation")
  .on("click", ".s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_292")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3b4f5c19-1c70-400d-be6f-9eb9c4c01782"
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0b407745-b0d8-4cb9-91e0-0d8da0c24f83",
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
    } else if(jFirer.is("#s-Hotspot_2")) {
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d30c6487-3569-4bd3-9413-761ea1f2570a",
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
    } else if(jFirer.is("#s-Rectangle_2")) {
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
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_2": {
                      "attributes": {
                        "background-color": "#FFDA5A",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDB60",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDB60",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFDB60",
                        "border-radius": "2px 0px 0px 2px",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_2 span": {
                      "attributes": {
                        "color": "#404040",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "微软雅黑,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFDB60",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFDB60",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFDB60",
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
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#000000",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#626054",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#626054",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#626054",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 2px 2px 0px",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_3 span": {
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
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#626054",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#626054",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#626054",
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
    } else if(jFirer.is("#s-Rectangle_3")) {
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
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_2": {
                      "attributes": {
                        "background-color": "#000000",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#626054",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#626054",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#626054",
                        "border-radius": "2px 0px 0px 2px",
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_2 span": {
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
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#626054",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#626054",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#626054",
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
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_3": {
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
                        "line-height": "19px",
                        "font-size": "10.0pt",
                        "font-family": "微软雅黑,Arial"
                      }
                    }
                  },{
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_3 span": {
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
                    "#s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b #s-Rectangle_3": {
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
  .on("pageload", ".s-64dfdf8b-3e2e-4354-9b57-7fc463f71c8b .pageload", function(event, data) {
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