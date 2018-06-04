const black = '#434343';
const blink = '#00ff00';

function rightHandUp() {
  TweenMax.to('#ludolf_arm_right', 1, {scaleY:-1, y:50});
  TweenMax.to('#ludolf_hand_right', 1, {y:-200});
}

function rightHandDown() {
  TweenMax.to('#ludolf_arm_right', 1, {scaleY:1, y:0});
  TweenMax.to('#ludolf_hand_right', 1, {y:0});
}

function leftHandUp() {
  TweenMax.to('#ludolf_arm_left', 1, {scaleY:-1, y:50});
  TweenMax.to('#ludolf_hand_left', 1, {y:-200});
}

function leftHandDown() {
  TweenMax.to('#ludolf_arm_left', 1, {scaleY:1, y:0});
  TweenMax.to('#ludolf_hand_left', 1, {y:0});
}

function rightLegUp() {
  TweenMax.to('#ludolf_leg_right', 1, {y:-15});  
}

function rightLegDown() {
  TweenMax.to('#ludolf_leg_right', 1, {y:0});  
}

function leftLegUp() {
  TweenMax.to('#ludolf_leg_left', 1, {y:-15});  
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
      .to('#ludolf_eyebrow_right', 0.1, {y:0, x:-5, rotation:10, transformOrigin: '100% 0%'})
      .to('#ludolf_eyebrow_right', 0.3, {y:0, x:0, rotation:0});
    new TimelineMax({repeat:repeat})
      .to('#ludolf_eyebrow_left', 0.1, {y:0, x:5, rotation:-10, transformOrigin: '0% 100%'})
      .to('#ludolf_eyebrow_left', 0.3, {y:0, x:0, rotation:0});    
  }
  
  function nose() {
    new TimelineMax()
      .to('#ludolf_nose', 0.2, {y:-5})
      .to('#ludolf_nose', 0.1, {y:0});
  }      
    
  function buttons() {
    var yellow1 = '#ffe599';
    var yellow2 = '#efe399';
    var red1 = '#cc5858';
    var red2 = '#ac5858';
    
    function changeColor1() {    
      TweenMax.to('#ludolf_button_square', 0.5, {fill:red1});
      TweenMax.to('#ludolf_button_square_line', 0.5, {stroke:red1});
      TweenMax.to('#ludolf_button_triangle', 0.3, {fill:yellow1});
      TweenMax.to('#ludolf_button_triangle_line', 0.3, {stroke:yellow1});
      TweenMax.to('#ludolf_bottom3', 0.2, {fill:yellow1});
      TweenMax.to('#ludolf_bottom3_line', 0.2, {stroke:yellow1});
    }
    
    function changeColor2() {
      TweenMax.to('#ludolf_button_square', 0.5, {fill:red2});
      TweenMax.to('#ludolf_button_square_line', 0.5, {stroke:red2});
      TweenMax.to('#ludolf_button_triangle', 0.3, {fill:yellow2});
      TweenMax.to('#ludolf_button_triangle_line', 0.3, {stroke:yellow2});
      TweenMax.to('#ludolf_bottom3', 0.2, {fill:yellow2});
      TweenMax.to('#ludolf_bottom3_line', 0.2, {stroke:yellow2});
    }
    
    var tl = new TimelineMax({repeat:-1})
      .add(changeColor2, 0.5)
      .add(changeColor1, 1.0)
      .add(changeColor2, 1.5)
      .add(changeColor1, 2.0)
      .add(changeColor2, 2.5)
      .add(changeColor1, 3.5)
      .add(changeColor2, 4.0)
      .add(changeColor1, 4.5);   
  }  

  function body() {
    new TimelineMax()
      .to('#ludolf_body', 0.5, {y:-2, rotation:1, transformOrigin: '50% 100%'})
      .to('#ludolf_body', 0.5, {y:-2, rotation:-1, transformOrigin: '50% 100%'})
      .to('#ludolf_body', 0.5, {y:0, rotation:0});   
  }
  
  var motions = [body, eyelight, eyebrow, nose];
  
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

tl_blinking.resume();
tl_dance.resume();
