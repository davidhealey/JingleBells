// License - Public Domain

namespace LookAndFeel
{
	const knob = Content.createLocalLookAndFeel();
	
	knob.registerFunction("drawRotarySlider", function(g, obj)
	{
		var a = [obj.area[0] + 2, obj.area[1], obj.area[2] - 4, obj.area[3] - 4];
		var shadow = 4;
		
		if (obj.enabled)
		{
			g.setColour(Colours.withAlpha(Colours.black, obj.enabled ? 0.2 : 0.1));
			g.fillEllipse([a[0], a[1] + shadow, a[2], a[3]]);
		}
		
		g.setColour(Colours.withAlpha(obj.bgColour, obj.enabled ? 1.0 : 0.5));
		g.fillEllipse(a);
		
        var startOffset = 2.5;
        var endOffset = startOffset * 2 * obj.valueNormalized - startOffset;
        var markWidth = obj.area[2] / 12;
        
        g.rotate(endOffset, [obj.area[2] / 2, obj.area[2] / 2 - 2]);
        g.setColour(Colours.withAlpha(obj.itemColour1, obj.enabled ? 1.0 : 0.5));
        g.fillRoundedRectangle([2 + a[2] / 2 - markWidth / 2, 2, markWidth, a[3] / 3], 2);
	});	
	
	for (x in Content.getAllComponents("knb*"))
		x.setLocalLookAndFeel(knob);
		
	Content.setValuePopupData(
	{
	    "fontName": "Oxygen",
	    "fontSize": 20,
	    "borderSize": 2,
	    "borderRadius": 5,
	    "margin": 10,
	    "bgColour": Colours.lightgrey,
	    "itemColour": 0xa8000000,
	    "itemColour2": 0xa8000000,
	    "textColour": Colours.white
	});
}