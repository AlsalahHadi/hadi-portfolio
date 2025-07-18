import { about } from '@/data';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

const fontPath = '../../../../public/fonts/InstrumentSans-SemiBold.ttf';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const font = fetch(new URL(fontPath, import.meta.url)).then(res =>
    res.arrayBuffer(),
  );
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(${about.website}/og-bg.png)`,
        }}>
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 160,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'black',
            lineHeight: '160px',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Instrument Sans',
          }}>
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Instrument Sans',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
