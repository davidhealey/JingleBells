// License - Public Domain

namespace Keyboard
{
	for (i = 0; i < 128; i++)
	{
		if (i >= 59 && i <= 82)
			Engine.setKeyColour(i, Colours.withAlpha(Colours.green, 0.2));
		else
			Engine.setKeyColour(i, Colours.withAlpha(Colours.black, 0.5));
	}
}
