import {
  TextView,
  contentView,
  Composite,
  Button,
  Stack,
  device
} 
from 'tabris';

export class App {

  public start() {

    const screenWidth = device.screenWidth;

    contentView.append(
      <$>
        {/* Menu */}
        <Composite 
          layoutData="stretch" id="menuView">
            <Stack
              left={0} width={screenWidth/2} centerY={0} spacing={0} id="menuHolder">
                <TextView
                  padding={15} highlightOnTouch layoutData="stretchX" font="15px bold" textColor="#FFF">Home</TextView>
                <TextView
                  padding={15} highlightOnTouch layoutData="stretchX" font="15px bold" textColor="#FFF">About Us</TextView>
                <TextView
                  padding={15} highlightOnTouch layoutData="stretchX" font="15px bold" textColor="#FFF">Projects</TextView>
                <TextView
                  padding={15} highlightOnTouch layoutData="stretchX" font="15px bold" textColor="#FFF">Support</TextView>
                <TextView
                  padding={15} highlightOnTouch layoutData="stretchX" font="15px bold" textColor="#FFF">Contact Us</TextView>
            </Stack>
          </Composite>
        
        {/* Page */}
        <Composite
          layoutData="stretch" background="#FFF" id="appView" elevation={15}>
            <Button
              layoutData={'center'} background="#0E6C1A" padding={15} id="menuControl">Open Menu</Button>
          </Composite>
      </$>
    );

    const menuHolder:Stack = contentView.find('#menuHolder').first();
    const menus = menuHolder.children('TextView');
    

    const menu:Composite = contentView.find('#menuView').first();
    const appLayer:Composite = contentView.find('#appView').first();

    const menuControl:Button = contentView.find('#menuControl').first();

    

    menu.background = { colorStops: ['#0E6C1A', '#9FCC00'], direction: 120 };
    menuControl.on('select', () => {
      
      appLayer.cornerRadius = 10;
      appLayer.enabled = false;
      appLayer.animate({
        transform : {
          scaleX : 0.7,
          scaleY : 0.7,
          translationX: screenWidth/2
        }
      },{
        duration: 250
      });

    })

    menus.forEach(elm => {
      elm.on('tap', () => {
        appLayer.enabled = true;

        appLayer.animate({
          transform: {
            scaleX: 1,
            scaleY: 1,
            translationX: 0
          }
        }, {
          duration: 250
        });

        appLayer.cornerRadius = 0;
      })
    })

  }

}
