//call fancybox from headdings links
	function fancyboxHeading(){
		  $('.fancyboxHeading').fancybox({
		  	width: 1166,
		    openEffect  : 'fade',
		    closeEffect : 'fade',
		    autoResize:true,
		    wrapCSS:'fancyboxHeading-popup',
		    'closeBtn' : true,
		    fitToView:true,
		    padding:'0'
		  })
		}
	function fancyboxHeading1(){
	  $('.fancyboxHeading1').fancybox({
	  	width: 1166,
	    openEffect  : 'fade',
	    closeEffect : 'fade',
	    autoResize:true,
	    wrapCSS:'fancyboxHeading-popup1',
	    'closeBtn' : true,
	    fitToView:true,
	    padding:'0',
	    helpers:  {
	        overlay : {
	        	css  : {
	        		
	        	} 
	        }
	    },
	    onUpdate: function(){
	    	if($(window).width()>992){
		    	$(".fancyboxHeading-popup1").parent().css({
		    		"background": " url('images/login-menu.png') no-repeat",
		    		"background-size": "cover",
		    		"margin-top": "95px"
		    	});
	    	}else {
	    		$(".fancyboxHeading-popup1").parent().css({
		    		"background": " url('images/login-menu.png') no-repeat",
		    		"background-size": "cover",
		    		"margin-top": "0px"
		    	});
	    	}
	    }

	  })

	  $(document).on("click",function(event){
	  	var clickEl = event.target;
	  	if(!$(clickEl).closest(".fancybox-overlay").hasClass("fancybox-overlay")&&!$(clickEl).closest(".ui-timepicker-wrapper").hasClass("ui-timepicker-wrapper")){
	  		
	  		$(".fancyboxHeading-popup1 .fancybox-close").trigger("click");
	  		$(".fancyboxHeading-popup .fancybox-close").trigger("click");
	  	}  	
	  })

	  $(".open_our-transport").on("click", function(event){
	  		$(".fancybox-close").trigger("click");
	  })
	  
	}
//

//some action control for cityPicker fancybox
	function cityPickerToggle(){	
		$("#city_picker .city-select").click(function(event){	
			event.stopPropagation();
			$("#city_picker .city-search").attr("disabled","disabled").css("pointers-event","none");
		});
		$("#city_picker .city-search").click(function(){	
			event.stopPropagation();
			$("#city_picker .city-select").attr("disabled","disabled").css("pointers-event","none");
		});
		$("#city_picker .standartYellow").on("click", function(){
			event.stopPropagation();
		})
		$("#city_picker").click(function(){
			$("#city_picker .city-select").removeAttr("disabled");
			$("#city_picker .city-search").removeAttr("disabled");	
			// $("#city_picker .city-search").val("");	
		})
		// $("#city_picker").on("click",function(){
		// 	console.log("hi");
		// })
	}
//

function validationCall1(form){
	var thisForm = $(form);
  	var formSur = thisForm.serialize();

    $.ajax({
        url : thisForm.attr('action'),
        data: {"action":"return_city_name", "city_name":formSur},
        method:'POST',
        success : function(data){
            if ( data.trim() == 'true') {
                thisForm.trigger("reset");
                $(".city-picker a p").append(data.trim());               
            }
            else {
               thisForm.trigger('reset');
            }

        }
    });
} 

// toggle tabs in calculator fancybox from heading nav menu
	function driver_nondriverToggle(){
		$("#headerCalculator .pages-line").eq(1).slideUp();
		$("#headerCalculator .tabs-line .tab").on("click", function(){
			$("#headerCalculator .tabs-line .tab").removeClass("chosen");
			$(this).addClass("chosen");		
			var tabIndex = $(this).index();
			// if(tabIndex==0){
			// 	tabIndex=0;
			// }else if(tabIndex==1){
			// 	tabIndex=2;
			// }
			console.log(tabIndex);		
			$("#headerCalculator .pages-line").slideUp();
			$("#headerCalculator .pages-line").eq(tabIndex).slideDown();
		})
	}
// 

//functions for date-picker
	function datepickerInit(){
		$("#headerCalculator .datepicker-init").datepicker({
		    minDate: new Date(), // Now can select only dates, which goes after today
		    firstDay: 1,
		    showOtherMonths: true,
	      	selectOtherMonths: true,
	      	
		})	
	}
	function dropdownDatepicker(){
		$(".input-field").on("click", function(event){
			event.stopPropagation();
			console.log(1);
			$(this).next(".dropdown-datepicker").toggle();		
		})
		$(document).on("click", function(){
			$(".dropdown-datepicker").hide();
		})
		$(".dropdown-datepicker").on("click", function(event){
			event.stopPropagation();
		})
	}
	function datepickerTab(formName){
		$("#headerCalculator "+formName+" .start-rent+.dropdown-datepicker .main-date-content .main-date-tab").eq(1).fadeOut();
		$("#headerCalculator "+formName+" .end-rent+.dropdown-datepicker .main-date-content .main-date-tab").eq(1).fadeOut();

		$("#headerCalculator "+formName+" .start-rent+.dropdown-datepicker .head-tab").on("click", function(){
			console.log($("#headerCalculator "+formName+" .start-rent+.dropdown-datepicker .main-date-content .main-date-tab").length);
			$(formName+" .start-rent+.dropdown-datepicker .head-tab").removeClass("clicked");
			$(this).addClass("clicked");
			var tabIndex = $(this).index();		
			$("#headerCalculator "+formName+" .start-rent+.dropdown-datepicker .main-date-content .main-date-tab").fadeOut();
			$("#headerCalculator "+formName+" .start-rent+.dropdown-datepicker .main-date-content .main-date-tab").eq(tabIndex).fadeIn();
		})

		$("#headerCalculator "+formName+" .end-rent+.dropdown-datepicker .head-tab").on("click", function(){
			$(formName+" .end-rent+.dropdown-datepicker .head-tab").removeClass("clicked");
			$(this).addClass("clicked");
			var tabIndex = $(this).index();		
			$("#headerCalculator "+formName+" .end-rent+.dropdown-datepicker .main-date-content .main-date-tab").fadeOut();
			$("#headerCalculator "+formName+" .end-rent+.dropdown-datepicker .main-date-content .main-date-tab").eq(tabIndex).fadeIn();
		})
	}
	var startRentGlobal=null;
	var endRentGlobal=null;
	var curdateStart=null;
	var curdateEnd=null;

	function dataRangeStart(startRentInner,endRentIner){
		var date = startRentInner.datepicker("getDate");
			 curdateStart = date;	
			endRentIner.datepicker("option", "minDate", date);
			$(".start-rent .left-part p").html(""+date.format("dd/mm/yy"));
			$(startRentInner).closest(".page-line-item").find(".input-field").addClass("updated");
			$(startRentInner).closest(".page-line-item").find(".input-field").removeClass("error");	
			$(startRentInner).next("input").attr("value",""+date.format("dd/mm/yy"));
			$(startRentInner).closest(".page-line-item").find(".error-message-hour").css("display","none");
			$(startRentInner).closest(".page-line-item").find(".error-message-minutes").css("display","none");
		


			startHourGlobal.timepicker('option','minTime',  "0:00");
			startHourGlobal.timepicker('option','maxTime', '23:00');		
			endHourGlobal.timepicker('option','minTime',  "0:00");
			endHourGlobal.timepicker('option','maxTime', '23:00');
			startMinutsGlobal.timepicker('option','minTime',  "0:00");
			startMinutsGlobal.timepicker('option','maxTime', '0:55');
			endMinutsGlobal.timepicker('option','minTime',  "0:00");
			endMinutsGlobal.timepicker('option','maxTime', '0:55');
	}

	function dataRangeEnd(endRentIner,startRentInner){
		var date = endRentIner.datepicker("getDate");
			curdateEnd = date;
			startRentInner.datepicker("option", "maxDate", date);	
			$(".end-rent .left-part p").html(""+date.format("dd/mm/yy"));
			$(endRentIner).closest(".page-line-item").find(".input-field").addClass("updated");
			$(endRentIner).closest(".page-line-item").find(".input-field").removeClass("error");
			$(endRentIner).next("input").attr("value",""+date.format("dd/mm/yy"));
			$(endRentIner).closest(".page-line-item").find(".error-message-hour").css("display","none");
			$(endRentIner).closest(".page-line-item").find(".error-message-minutes").css("display","none");
						
			
			startHourGlobal.timepicker('option','minTime',  "0:00");
			startHourGlobal.timepicker('option','maxTime', '23:00');		
			endHourGlobal.timepicker('option','minTime',  "0:00");
			endHourGlobal.timepicker('option','maxTime', '23:00');
			startMinutsGlobal.timepicker('option','minTime',  "0:00");
			startMinutsGlobal.timepicker('option','maxTime', '0:55');
			endMinutsGlobal.timepicker('option','minTime',  "0:00");
			endMinutsGlobal.timepicker('option','maxTime', '0:55');
	}


	function dataRange(startRent,endRent){	
		var dateFormat = "mm/dd/yy";
		startRentGlobal = startRent.datepicker().on("change", function(){
			dataRangeStart(startRent,endRent);
		});
		
		endRentGlobal = endRent.datepicker().on("change", function(){
			dataRangeEnd(endRent,startRent);
		});
		
	}

	var dateFormat = function () {
		var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
			timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
			timezoneClip = /[^-+\dA-Z]/g,
			pad = function (val, len) {
				val = String(val);
				len = len || 2;
				while (val.length < len) val = "0" + val;
				return val;
			};

		// Regexes and supporting functions are cached through closure
		return function (date, mask, utc) {
			var dF = dateFormat;

			// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
			if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
				mask = date;
				date = undefined;
			}

			// Passing date through Date applies Date.parse, if necessary
			date = date ? new Date(date) : new Date;
			if (isNaN(date)) throw SyntaxError("invalid date");

			mask = String(dF.masks[mask] || mask || dF.masks["default"]);

			// Allow setting the utc argument via the mask
			if (mask.slice(0, 4) == "UTC:") {
				mask = mask.slice(4);
				utc = true;
			}

			var	_ = utc ? "getUTC" : "get",
				d = date[_ + "Date"](),
				D = date[_ + "Day"](),
				m = date[_ + "Month"](),
				y = date[_ + "FullYear"](),
				H = date[_ + "Hours"](),
				M = date[_ + "Minutes"](),
				s = date[_ + "Seconds"](),
				L = date[_ + "Milliseconds"](),
				o = utc ? 0 : date.getTimezoneOffset(),
				flags = {
					d:    d,
					dd:   pad(d),
					ddd:  dF.i18n.dayNames[D],
					dddd: dF.i18n.dayNames[D + 7],
					m:    m + 1,
					mm:   pad(m + 1),
					mmm:  dF.i18n.monthNames[m],
					mmmm: dF.i18n.monthNames[m + 12],
					yy:   String(y).slice(2),
					yyyy: y,
					h:    H % 12 || 12,
					hh:   pad(H % 12 || 12),
					H:    H,
					HH:   pad(H),
					M:    M,
					MM:   pad(M),
					s:    s,
					ss:   pad(s),
					l:    pad(L, 3),
					L:    pad(L > 99 ? Math.round(L / 10) : L),
					t:    H < 12 ? "a"  : "p",
					tt:   H < 12 ? "am" : "pm",
					T:    H < 12 ? "A"  : "P",
					TT:   H < 12 ? "AM" : "PM",
					Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
					o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
					S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
				};

			return mask.replace(token, function ($0) {
				return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
			});
		};
	}();



	// Some common format strings
	dateFormat.masks = {
		"default":      "ddd mmm dd yyyy HH:MM:ss",
		shortDate:      "m/d/yy",
		mediumDate:     "mmm d, yyyy",
		longDate:       "mmmm d, yyyy",
		fullDate:       "dddd, mmmm d, yyyy",
		shortTime:      "h:MM TT",
		mediumTime:     "h:MM:ss TT",
		longTime:       "h:MM:ss TT Z",
		isoDate:        "yyyy-mm-dd",
		isoTime:        "HH:MM:ss",
		isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
		isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
	};

	// Internationalization strings
	dateFormat.i18n = {
		dayNames: [
			"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
			"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
		],
		monthNames: [
			"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
			"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
		]
	};
	// For convenience...
	Date.prototype.format = function (mask, utc) {
		return dateFormat(this, mask, utc);
	};

	// timePicker init and range
		function timePicker(hours, minutes){
			hours.timepicker({
				"step": 60,
				'timeFormat': "H:i"
			});
			minutes.timepicker({
				"step": 5,
				'timeFormat': "H:i",
				'minTime': '0:00',
		    	'maxTime': '0:55',
			});

		}
		var  startMinutsGlobal =null;
		var endMinutsGlobal =null;
		var startHourGlobal=null;
		var endHourGlobal=null;
		function timePickerRange(startHour,startMinuts,endHour,endMinuts){
			
			startHourGlobal = startHour.timepicker({"step": 60,
				'timeFormat': "H:i",
				'minTime': '0:00',
		    	'maxTime': '23:00'}).on("change", function(){		
				var dataToCheck1 = startRentGlobal.datepicker("getDate").format("dd/mm/yy");
				var dataToCheck2 = endRentGlobal.datepicker("getDate").format("dd/mm/yy");
				var hours=startHour.timepicker("getTime");		
				if(dataToCheck1==dataToCheck2){
					// hours = startHour.timepicker("getTime");			
					endHour.timepicker('option',{'minTime': hours,'timeFormat': "H:i"});
				}else{
					
				startHour.timepicker('option','minTime',  "0:00");
				startHour.timepicker('option','maxTime', '23:00');
				}		
				$(".start-rent .right-part p span:nth-child(1)").html(""+hours.format("HH"));
				startMinuts.timepicker('option','minTime',  "0:00");
				startMinuts.timepicker('option','maxTime', '0:55');
				endMinuts.timepicker('option','minTime',  "0:00");
				endMinuts.timepicker('option','maxTime', '0:55');
			})

			endHourGlobal = endHour.timepicker({
				"step": 60,
				'timeFormat': "H:i",
				'minTime': '0:00',
		    	'maxTime': '23:00'}).on("change", function(){		
				var dataToCheck1 = startRentGlobal.datepicker("getDate").format("dd/mm/yy");
				var dataToCheck2 = endRentGlobal.datepicker("getDate").format("dd/mm/yy");
				var hours = endHour.timepicker("getTime");			
				if(dataToCheck1==dataToCheck2){
					// hours = endHour.timepicker("getTime");			
					startHour.timepicker('option',{'maxTime': hours,'timeFormat': "H:i"});
				}else{			
					endHour.timepicker('option','minTime',  "0:00");
					endHour.timepicker('option','maxTime', '23:00');
				}		
				$(".end-rent .right-part p span:nth-child(1)").html(""+hours.format("HH"));
				startMinuts.timepicker('option','minTime',  "0:00");
				startMinuts.timepicker('option','maxTime', '0:55');
				endMinuts.timepicker('option','minTime',  "0:00");
				endMinuts.timepicker('option','maxTime', '0:55');
			})

		    startMinutsGlobal = startMinuts.timepicker({"step": 5,
				'timeFormat': "H:i",
				'minTime': '0:00',
		    	'maxTime': '0:55',}).on("change", function(){		
				var dataToCheck1 = startRentGlobal.datepicker("getDate").format("dd/mm/yy");
				var dataToCheck2 = endRentGlobal.datepicker("getDate").format("dd/mm/yy");
				var minuts = startMinuts.timepicker("getTime");		
				if(dataToCheck1==dataToCheck2){
					var hoursToCheck1 = startHour.timepicker("getTime");	
					var hoursToCheck2 = endHour.timepicker("getTime");	
					
					if(hoursToCheck1==hoursToCheck1){
						// minuts =startMinuts.timepicker("getTime");			
						endMinuts.timepicker('option',{'minTime': minuts,'timeFormat': "H:i"});
					}else{
						startMinuts.timepicker('option','minTime',  "0:00");
						startMinuts.timepicker('option','maxTime', '0:55');
					}		
				}else{
					
				startMinuts.timepicker('option','minTime',  "0:00");
				startMinuts.timepicker('option','maxTime', '0:55');
				}
				
				$(".start-rent .right-part p span:nth-child(2)").html(""+minuts.format("MM"));
			})

		    endMinutsGlobal = endMinuts.timepicker({
				"step": 5,
				'timeFormat': "H:i",
				'minTime': '0:00',
		    	'maxTime': '0:55',}).on("change", function(){		
				var dataToCheck1 = startRentGlobal.datepicker("getDate").format("dd/mm/yy");
				var dataToCheck2 = endRentGlobal.datepicker("getDate").format("dd/mm/yy");
				var minuts = endMinuts.timepicker("getTime");			
				if(dataToCheck1==dataToCheck2){
					var hoursToCheck1 = startHour.timepicker("getTime");	
					var hoursToCheck2 = endHour.timepicker("getTime");	
					if(hoursToCheck1==hoursToCheck1){
						// minuts = endMinuts.timepicker("getTime");			
						startMinuts.timepicker('option',{'maxTime': minuts,'timeFormat': "H:i"});
					}else{
						endMinuts.timepicker('option','minTime',  "0:00");
						endMinuts.timepicker('option','maxTime', '0:55');
					}
				}else{			
					endMinuts.timepicker('option','minTime',  "0:00");
					endMinuts.timepicker('option','maxTime', '0:55');
				}
				
				$(".end-rent .right-part p span:nth-child(2)").html(""+minuts.format("MM"));
			})
		}
	//

	function datepickerButtonSubmit(datepicker1, datepicker2){
		
		$("#headerCalculator .datepicker-button").on("click", function(event){
			event.preventDefault();	

			$(this).closest(".dropdown-datepicker").toggle();
			if($(this).closest(".page-line-item").find(".datepicker-init").prop("id")==$(datepicker1).prop("id")){
				// dataRangeStart(datepicker1, datepicker2);
				curdateStart = $(datepicker1).datepicker("getDate");
				$(".start-rent .left-part p").html(""+curdateStart.format("dd/mm/yy"));
				$(datepicker1).closest(".page-line-item").find(".input-field").addClass("updated");
				$(datepicker1).closest(".dropdown-datepicker").toggle();
			}else if($(this).closest(".page-line-item").find(".datepicker-init").prop("id")==$(datepicker2).prop("id")){
				// dataRangeEnd(datepicker2, datepicker1);
				curdateEnd = $(datepicker2).datepicker("getDate");			
				$(".end-rent .left-part p").html(""+curdateEnd.format("dd/mm/yy"));
				$(datepicker2).closest(".page-line-item").find(".input-field").addClass("updated");
				$(datepicker2).closest(".dropdown-datepicker").toggle();
			}
		})
	}

	function calculatorDatePickerValidate(form){
		var curForm = $(form);
		
		 	curForm.on('submit', function(e) {	 
		 		if (!curForm.find(".start-rent").hasClass("updated")){
				
	           		e.preventDefault();
	           		curForm.find(".start-rent").addClass("error");
	           		curForm.find(".error-message-hour").css("display","block");
	           		curForm.find(".error-message-minutes").css("display","block");
	            } else if(curForm.find(".start-rent").hasClass("updated")){
					
					curForm.find(".start-rent").removeClass("error");
					curForm.find(".error-message-hour").css("display","none");
					curForm.find(".error-message-minutes").css("display","none");
				} 

				if (!curForm.find(".end-rent").hasClass("updated")){
				 	 
				 		
				 		e.preventDefault();
			            curForm.find(".end-rent").addClass("error");
			            curForm.find(".error-message-hour").css("display","block");
	           			curForm.find(".error-message-minutes").css("display","block");

			       
				} else if(curForm.find(".end-rent").hasClass("updated")){
					
					curForm.find(".end-rent").removeClass("error");
					curForm.find(".error-message-hour").css("display","none");
					curForm.find(".error-message-minutes").css("display","none");
				}
	        });
		
	}
//

function HeaaderCalculatorValidationCall(form){
	var thisForm = $(form);
  	var formSur = thisForm.serialize();
  	console.log(formSur);

    $.ajax({
        url : thisForm.attr('action'),
        data: {"calculator_date":formSur},
        method:'POST',
        success : function(data){
            if ( data.trim() == 'true') {
                thisForm.trigger("reset");
                $(".bottom-total .score .description").append(data.trim());               
            }
            else {
               thisForm.trigger('reset');
            }

        }
    });
} 

//togle for sliding nav menu from above
	var stucture =null;
	var structureAbout = null;
	function headerLeftMenuToggle(){
		$(".global-wrapper").wrap("<div class='global-wrapper-wrapper global-wrapper-closed'></div>");
		stuctureService = $(".wrapper-our-servicesjs").html();
		structureAbout = $(".wrapper-about-companyjs").html();
		structurePartners = $(".wrapper-partners_investorsjs").html();
		$(".global-wrapper").on("click",function(event){
			if($(".sn-outer-wrapper").hasClass("animate")){
				$(".our-transport-nav-tabs").fadeOut();
			}
			if($(".global-wrapper-wrapper").hasClass("global-wrapper-opend")){			
				event.stopPropagation();					
				$(".header .bottom-part .main-wrap ul li a").removeClass("active");
				$(".nav-mobile-menu .bottom-part ul li a").removeClass("active");
			
				$(".global-wrapper-wrapper").removeClass("global-wrapper-opend");
				$(".sn-outer-wrapper .our-services-nav.navigated").fadeOut(function(){
					$(".sn-outer-wrapper .our-services-nav.navigated").detach();
					$(".sn-outer-wrapper").css("overflow","visible");
				});							
				$(".sn-outer-wrapper .about-company-nav.navigated").fadeOut(function(){
					$(".sn-outer-wrapper .about-company-nav.navigated").detach();
					$(".sn-outer-wrapper").css("overflow","visible");
				});	
				$(".sn-outer-wrapper .partners_investors-nav.navigated").fadeOut(function(){
					$(".sn-outer-wrapper .partners_investors-nav.navigated").detach();
					$(".sn-outer-wrapper").css("overflow","visible");
				});	
			}	
		})	
		$(document).on("click", function(event){		
			var eventNew = event;
			var navItem = event.target;	

			if($(navItem).hasClass("open_our-services")){
				eventNew.preventDefault();
				$(".global-wrapper").addClass("opened-nav-menu");
				$(".global-wrapper-wrapper").addClass("global-wrapper-opend");			
				$(".sn-outer-wrapper").append(stuctureService);
				$(".our-services-nav").addClass("navigated");
				$(".our-transport-nav-tabs").fadeOut();
				$(".sn-outer-wrapper").css("overflow-x","hidden");
				if($(window).width()<1600){
					$(".our-services-nav.navigated div .heading+ul").slideUp();
				}else{
					$(".our-services-nav.navigated div .heading+ul").slideDown();
				}

			}else if($(navItem).hasClass("open_about-company")){
				$(".global-wrapper").addClass("opened-nav-menu");
				$(".global-wrapper-wrapper").addClass("global-wrapper-opend");			
				$(".sn-outer-wrapper").append(structureAbout);
				$(".about-company-nav").addClass("navigated");
				$(".our-transport-nav-tabs").fadeOut();
				$(".sn-outer-wrapper").css("overflow-x","hidden");

				
			}else if($(navItem).hasClass("open_partners_investors")){
				$(".global-wrapper").addClass("opened-nav-menu");
				$(".global-wrapper-wrapper").addClass("global-wrapper-opend");			
				$(".sn-outer-wrapper").append(structurePartners);
				$(".partners_investors-nav").addClass("navigated");
				$(".sn-outer-wrapper").css("overflow-x","hidden");
			}			
			
		})
		
		$(".global-wrapper").on("click", function(event){
			if( $(".sn-outer-wrapper").hasClass("modalview")){
				$(".header .bottom-part .main-wrap ul li a").removeClass("active");
				$(".nav-mobile-menu .bottom-part ul li a").removeClass("active");
			}	
			$(this).removeClass("opened-nav-menu");	
		})
	}

	function mobileMenuAccordion(){
		$(document).on("click", function(event){
			if($(window).width()<1600){
				var targetItem = $(event.target);
				console.log(targetItem);
				if(targetItem.parent().hasClass("our-services-heading")){					
					$(".our-services-nav.navigated div .heading+ul").slideUp();			 			
					if(!$(targetItem).parent().next("ul").hasClass("slided")){
						$(targetItem).parent().next("ul").addClass("slided");
						$(targetItem).parent().next("ul").slideDown();
					}else{$(".our-services-nav.navigated div .heading+ul").removeClass("slided");}
							
				}
			}
		})
	}

	function ourTransportTabs(){
		$(".open_our-transport").on("click",function(event){			
			$(".our-transport-nav-tabs").fadeIn();
		})

		$(".our-transport-nav-page").fadeOut();

		$(".our-transport-nav-page").eq(0).fadeIn();

		$(".our-transport-nav-tab").on("click", function(){
			$(".our-transport-nav-tab").removeClass("tabbed")
			$(this).addClass("tabbed");
			var currentTab = $(this).index();
			
			$(".our-transport-nav-page").fadeOut();
			$(".our-transport-nav-page").eq(currentTab).fadeIn("slow");
		})
	}
// 

// animation for different images
															// function backgroundScrollAnimation(elem){
																
															// 	 $(window).scroll(function(){	 	
															// 	 	var scrollTop = $(window).scrollTop();
															// 	 	var blockHeight = elem.offset().top ;
															// 	 	if(scrollTop >blockHeight){
															// 	 		$(elem).css("background-attachment","fixed");
															// 	 	}else if(scrollTop < blockHeight){
															// 	 		$(elem).css("background-attachment","scroll");
															// 	 	}
															// 	 })
															// }
//

// range slider for investor page
	var rangeCalc;
	function rangeSlider(){
		
		var leftPosition= null;
	   	var handle = $( "#custom-handle");
	    rangeCalc = $('#range-calc').slider({
	    animate: "slow",
	    value:0,
	    range: "min",
	    min: 500000,
	    max: 5000000,
	    step: 10000,
	    create: function(event, ui) {	       
	        $(".upper-handle").text("0");
	        $("#custom-handle").trigger("click");
	        $( ".range-calc" ).val( "$" + ui.value );
	        $("dimension-value").text("0");
	        leftPosition = parseInt(handle.css("left"))-25;
	        $(".upper-handle").css("left","0%");
	    },
	    slide: function( event, ui ) {  		             
	        $(".upper-handle").text( ui.value);
	        $( ".range-calc" ).val( "$" + ui.value );
	        leftPosition = parseInt(handle.css("left"))-25;
	        setTimeout(function(){
	         	$(handle).trigger("click");
	        },700);
	        $(".upper-handle").css("left",leftPosition);
	        $(".dimension-value").text(ui.value);

	        for(i=0; i<10; i++){
	         	var dataPrice = $(".investment .number-visual li").eq(i).data("price");	         	
	         	
	         	if(ui.value >= dataPrice){
		         	$(".investment .number-visual li[data-price='"+dataPrice+"']").addClass("priced");
		         	var index = $(".investment .number-visual li[data-price='"+dataPrice+"']").index();
		         	
		         	$(".investment .income-calc-result .midle-image-wrap img").eq(index).fadeIn();
		        }else{
		         	$(".investment .number-visual li[data-price='"+dataPrice+"']").removeClass("priced");
		         	var index = $(".investment .number-visual li[data-price='"+dataPrice+"']").index();
		         	
		         	$(".investment .income-calc-result .midle-image-wrap img").eq(index).fadeOut();
		        }
	        }  
	         rangeCalcSpinner.spinner("value", ui.value);
	      },
	      change: function( event, ui ) {
	      	$(".upper-handle").text( ui.value);
	      	$( ".range-calc" ).val( "$" + ui.value );
	      	leftPosition = parseInt(handle.css("left"))-25;
	      	 $(".upper-handle").css("left",leftPosition);
	      },
	  	});

	    $(".range-calc").val( "$" + $("#range-calc").slider("value"));
	    $("#range-calc").on("click", function(e){
	    	leftPosition = parseInt(handle.css("left"))-25;
	    	$(".upper-handle").css("left",leftPosition);
	    })

	    $(".midle-part .midle-image-wrap img").fadeOut("fast");
	    $(".midle-part .midle-image-wrap img").eq(0).fadeIn("fast");

	}
//

//validation popup forms for investor page
	function validationCallInvestment(form){

	  var thisForm = $(form);
	  var formSur = thisForm.serialize();

	    $.ajax({
	        url : thisForm.attr('action'),
	        data: formSur,
	        method:'POST',
	        success : function(data){
	            if ( data.trim() == 'true') {
	                thisForm.trigger("reset");
	                popNextInvestment("#back-call1", "fancyboxHeading-popup");

	            }
	            else {
	               thisForm.trigger('reset');
	            }

	        }
	    });
	}

	function popNextInvestment(popupId, popupWrap){

    $.fancybox.open(popupId,{
    	width: 1166,
    	openEffect  : 'fade',
	    closeEffect : 'fade',
        padding:0,
        fitToView:true,
        wrapCSS:popupWrap,
        autoResize:true,
        'closeBtn' : false
    });
 }
//

function oneImageSize(){
	var curWidth = $(".midle-part").width();
	var curHeight = $(".midle-part").height();
	$(".midle-part img").css({
		"width": curWidth,
		"height": curHeight
	})
}
 
function investCalculator(){
	
	$(".investment2").change(function(){
		console.log("in");		
		var enteredValue = $(".investment2 input").val();
		var yearlyIncome =  Math.round(enteredValue * 0.35);
		var monthlyIncome =  Math.round(yearlyIncome / 12);
		var dailyIncome = Math.round(monthlyIncome /30);
		$(".daily-income .number").html(dailyIncome);
		$(".weekly-income .number").html(monthlyIncome);
		$(".yearly-income .number").html(yearlyIncome);
	})
}


function navMobileToggle(){
	$(".mobile-nav-menu-button").on("click", function(){		
		$(".nav-mobile-menu").addClass("visible-nav-mobile-menu");		
	});
	$(".nav-mobile-close-button").on("click", function(){
		$(".nav-mobile-menu").removeClass("visible-nav-mobile-menu");
	})
	$(window).on("scroll", function(){
		$(".nav-mobile-menu").removeClass("visible-nav-mobile-menu");
	})
} 

//toggle class active for navigation menu items
	function toggleClassActive(){
		$(".header .bottom-part .main-wrap ul li a").on("click", function(event){	
			$(".header .bottom-part .main-wrap ul li a").removeClass("active");
			$(".nav-mobile-menu .bottom-part ul li a").removeClass("active");
			$(this).addClass("active");
		})	

		$(".nav-mobile-menu .bottom-part ul li a").on("click", function(event){	
			$(".nav-mobile-menu .bottom-part ul li a").removeClass("active");
			$(this).addClass("active");
		})	

	}
//

var rangeCalcSpinner;
function rangeCalcSpinner(){
	  rangeCalcSpinner =  $( "#range-calc-spinner" ).spinner({
      min: 500000,
      max: 5000000,
      step: 10000,
      start: 500000,
      spin: function( event, ui ) {	     	    
       	$(".dimension-value").text(ui.value);      
       	rangeCalc.slider("option","value", ui.value);
       	for(i=0; i<10; i++){
	         	var dataPrice = $(".investment .number-visual li").eq(i).data("price");	         	
	         	
	        if(ui.value >= dataPrice){
		        $(".investment .number-visual li[data-price='"+dataPrice+"']").addClass("priced");
		        var index = $(".investment .number-visual li[data-price='"+dataPrice+"']").index();
		         	
		        $(".investment .income-calc-result .midle-image-wrap img").eq(index).fadeIn();
		    }else{
		        $(".investment .number-visual li[data-price='"+dataPrice+"']").removeClass("priced");
		        var index = $(".investment .number-visual li[data-price='"+dataPrice+"']").index();
		         	
		        $(".investment .income-calc-result .midle-image-wrap img").eq(index).fadeOut();
		        }
	        } 
	    }
    });
}

function changePictureAttachment(elem){	
	$(window).on("scroll", function(){	
		
		if( $(window).scrollTop() > elem.offset().top){
			elem.addClass('attached');
		}else{elem.removeClass('attached');
		}	
	})
}




$(document).ready(function(){
	investCalculator();
	rangeSlider();
	driver_nondriverToggle();
	timePicker($('#nonedriver-hourpicker-start'),$("#nonedriver-minutepicker-start"));
	timePicker($('#nonedriver-hourpicker-end'),$("#nonedriver-minutepicker-end"));
	timePicker($('#driver-hourpicker-start'),$("#driver-minutepicker-start"));
	timePicker($('#driver-hourpicker-end'),$("#driver-minutepicker-end"));

	timePickerRange($('#nonedriver-hourpicker-start'),$("#nonedriver-minutepicker-start"),$('#nonedriver-hourpicker-end'),$("#nonedriver-minutepicker-end"));

	timePickerRange($('#driver-hourpicker-start'),$("#driver-minutepicker-start"),$('#driver-hourpicker-end'),$("#driver-minutepicker-end"));

	dropdownDatepicker();
	datepickerTab(".driver-cont");
	datepickerTab(".none-driver-cont");
	datepickerInit();
	dataRange($('#nonedriver-datepicker-start'),$('#nonedriver-datepicker-end'));
	dataRange($('#driver-datepicker-start'),$('#driver-datepicker-end'));
	datepickerButtonSubmit($('#nonedriver-datepicker-start'),$('#nonedriver-datepicker-end'));
	datepickerButtonSubmit($('#driver-datepicker-start'),$('#driver-datepicker-end'));
	// dataRange($("#headerCalculator nonedriver-cont .start-rent+.dropdown-datepicker .datepicker-init"),$("#headerCalculator nonedriver-cont .end-rent+.dropdown-datepicker .datepicker-init"));
	cityPickerToggle();
	fancyboxHeading();
	fancyboxHeading1();
	 validate('.city-picker-form', {submitFunction:validationCall1});
	 validate('.driver-cont', {submitFunction:HeaaderCalculatorValidationCall});
	 validate('.none-driver-cont', {submitFunction:HeaaderCalculatorValidationCall});
	 calculatorDatePickerValidate('.driver-cont');
	 calculatorDatePickerValidate('.none-driver-cont');
	 ourTransportTabs(); 
	 																// backgroundScrollAnimation($(".investors-image-wrap"));
	$('.global-wrapper').SecretNav({       
        navSelector: '.our-transport-nav',         // selector of the nav tag
        openSelector: '.open_our-transport', // selector of the menu's opener
        position: 'top'            // left | top
    });

    validate('.investment', {submitFunction:validationCallInvestment});
	  
   headerLeftMenuToggle();

   SmoothScroll({ stepSize: 100,
   animationTime    : 1000 });
   oneImageSize(); 
   	navMobileToggle();
   	toggleClassActive();
   	rangeCalcSpinner();   
   	mobileMenuAccordion();

   	if($(".investors-image-wrap").length){
  		changePictureAttachment($(".investors-image-wrap"));
  	}
  	if($(".business-travel-pic").length){
	  	changePictureAttachment($(".business-travel-pic"));     
	}

	if($(".credit-cart-pic").length){		
	  	changePictureAttachment($(".credit-cart-pic"));     
	}

	if($(".rent-buy-car-pic").length){		
	  	changePictureAttachment($(".rent-buy-car-pic"));     
	}

	if($(".operation-lising-pic").length){		
	  	changePictureAttachment($(".operation-lising-pic"));     
	}

	if($(".car-taxi-pic").length){		
	  	changePictureAttachment($(".car-taxi-pic"));     
	}
  	
  	if($(".cooperation-people-pic").length){		
	  	changePictureAttachment($(".cooperation-people-pic"));     
	}
	
	if($(".franchising-pic").length){		
	  	changePictureAttachment($(".franchising-pic"));     
	}

});

$(window).load(function(){
	// $("body").mCustomScrollbar({
	//     axis:"y",
	//      theme:"dark"
	// });
});

$(window).resize(function(){
	oneImageSize();
	if($(window).width()<1600){
				$(".our-services-nav.navigated div .heading+ul").slideUp();
			}else{
				$(".our-services-nav.navigated div .heading+ul").slideDown();
			}
});
