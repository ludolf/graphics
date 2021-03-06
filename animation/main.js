const origWidth = 322;
const origHeight = 372;

const ratio = document.getElementById('ludolf_ludolf').width.baseVal.value / origWidth;

TweenMax.set('#ludolf_robot', {scaleY:ratio, scaleX:ratio});

const black = '#434343';
const blink = '#00ff00';

function rightHandUp() {
  TweenMax.to('#ludolf_arm_right', 1, {scaleY:-1, y:50*ratio});
  TweenMax.to('#ludolf_hand_right', 1, {y:-200*ratio});
}

function rightHandDown() {
  TweenMax.to('#ludolf_arm_right', 1, {scaleY:1, y:0});
  TweenMax.to('#ludolf_hand_right', 1, {y:0});
}

function leftHandUp() {
  TweenMax.to('#ludolf_arm_left', 1, {scaleY:-1, y:50*ratio});
  TweenMax.to('#ludolf_hand_left', 1, {y:-200*ratio});
}

function leftHandDown() {
  TweenMax.to('#ludolf_arm_left', 1, {scaleY:1, y:0});
  TweenMax.to('#ludolf_hand_left', 1, {y:0});
}

function rightLegUp() {
  TweenMax.to('#ludolf_leg_right', 1, {y:-15*ratio});  
}

function rightLegDown() {
  TweenMax.to('#ludolf_leg_right', 1, {y:0});  
}

function leftLegUp() {
  TweenMax.to('#ludolf_leg_left', 1, {y:-15*ratio});  
}

function leftLegDown() {
  TweenMax.to('#ludolf_leg_left', 1, {y:0});  
}

function live() {
  
  function eyelight() {
    var repeat = Math.round(Math.random());
    new TimelineMax({repeat:repeat})
      .to('#ludolf_eyelight_left', 0.2, {rotation:20, transformOrigin: '0 100%'})
      .to('#ludolf_eyelight_left', 0.3, {rotation:0});              
    new TimelineMax({repeat:repeat})
      .to('#ludolf_eyelight_right', 0.2, {rotation:20, transformOrigin: '0 100%'})
      .to('#ludolf_eyelight_right', 0.3, {rotation:0});
  }
  
  function eyebrow() {
    var repeat = Math.round(Math.random() + 0.2);
    new TimelineMax({repeat:repeat})
      .to('#ludolf_eyebrow_right', 0.1, {y:0, x:-5*ratio, rotation:10, transformOrigin: '100% 0%'})
      .to('#ludolf_eyebrow_right', 0.3, {y:0, x:0, rotation:0});
    new TimelineMax({repeat:repeat})
      .to('#ludolf_eyebrow_left', 0.1, {y:0, x:5*ratio, rotation:-10, transformOrigin: '0% 100%'})
      .to('#ludolf_eyebrow_left', 0.3, {y:0, x:0, rotation:0});    
  }
  
  function nose() {
    new TimelineMax()
      .to('#ludolf_nose', 0.2, {y:-5*ratio})
      .to('#ludolf_nose', 0.1, {y:0});
  }      
    
  function buttons() {
    var yellow1 = '#ffe599';
    var yellow2 = '#e0c988';
    var red1 = '#cc5858';
    var red2 = '#ac5858';
    
    function changeColor1a() {    
      TweenMax.to('#ludolf_button_square', 0.5, {fill:red1});
      TweenMax.to('#ludolf_button_square_line', 0.5, {stroke:red1});
    }
    
    function changeColor1b() {    
      TweenMax.to('#ludolf_button_triangle', 0.3, {fill:yellow1});
      TweenMax.to('#ludolf_button_triangle_line', 0.3, {stroke:yellow1});
    }
    
    function changeColor1c() {    
      TweenMax.to('#ludolf_bottom3', 0.2, {fill:yellow1});
      TweenMax.to('#ludolf_bottom3_line', 0.2, {stroke:yellow1});
    }
    
    function changeColor2a() {
      TweenMax.to('#ludolf_button_square', 0.5, {fill:red2});
      TweenMax.to('#ludolf_button_square_line', 0.5, {stroke:red2});
    }
    
    function changeColor2b() {
      TweenMax.to('#ludolf_button_triangle', 0.3, {fill:yellow2});
      TweenMax.to('#ludolf_button_triangle_line', 0.3, {stroke:yellow2});
    }
    
    function changeColor2c() {
      TweenMax.to('#ludolf_bottom3', 0.2, {fill:yellow2});
      TweenMax.to('#ludolf_bottom3_line', 0.2, {stroke:yellow2});
    }
    
    new TimelineMax({repeat:-1})
      .add(changeColor2a, 0.2)
      .add(changeColor1a, 0.4);
    new TimelineMax({repeat:-1})
      .add(changeColor2b, 2)
      .add(changeColor1b, 3);
    new TimelineMax({repeat:-1})
      .add(changeColor2c, 1.0)
      .add(changeColor1c, 1.5);   
  }  

  function body() {
    new TimelineMax()
      .to('#ludolf_body', 0.5, {y:-2*ratio, rotation:1, transformOrigin: '50% 100%'})
      .to('#ludolf_body', 0.5, {y:-2*ratio, rotation:-1, transformOrigin: '50% 100%'})
      .to('#ludolf_body', 0.5, {y:0, rotation:0});   
  }
  
  var motions = [body, eyelight, nose, eyebrow, eyebrow];
    
  (function _live() {
      var next = Math.floor(Math.random() * motions.length);
      motions[next]();      
      setTimeout(_live, Math.floor((Math.random() * 3) + 2) * 1000);
  })(); 
  buttons();       
}

var tl_blinking = new TimelineMax({repeat:-1, repeatDelay:0.2, paused:true})
  .to('#ludolf_light', 0.2, {fill:blink})
  .to('#ludolf_light', 0.5, {fill:black, delay:0.2});

var tl_dance = new TimelineMax({repeat:-1, repeatDelay:0, paused:true})
  .add(rightHandUp, 0)
  .add(rightHandDown, 1)
  .add(leftHandUp, 1)
  .add(leftHandDown, 2)
  .add(rightLegUp, 1)
  .add(rightLegDown, 2)
  .add(leftLegUp, 0)
  .add(leftLegDown, 1);

live();

//tl_blinking.resume();
//tl_dance.resume();