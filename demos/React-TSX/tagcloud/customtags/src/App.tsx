import React, { useRef, useMemo, useCallback } from 'react';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

const App = () => {
  const myTagCloud = useRef<JqxTagCloud>(null);

  const source = useMemo(() => {
    const data = [
      { countryName: "Australia", technologyRating: 35 },
      { countryName: "United States", technologyRating: 60 },
      { countryName: "Germany", technologyRating: 55 },
      { countryName: "Brasil", technologyRating: 20 },
      { countryName: "United Kingdom", technologyRating: 50 },
      { countryName: "Japan", technologyRating: 80 }
    ];
    const src = {
      datafields: [
        { name: 'countryName' },
        { name: 'technologyRating' }
      ],
      datatype: "array",
      localdata: data,
    };
    return new jqx.dataAdapter(src, {});
  }, []);

  const getIndex = useCallback((liItem: any, ulItem: any) => {
    const allLiItems = ulItem.getElementsByTagName("li");
    for (const index in allLiItems) {
      if (!!allLiItems[index]) {
        if (!!allLiItems[index].children) {
          if (allLiItems[index] === liItem) {
            return index;
          }
        }
      } else {
        return -1;
      }
    }
  }, []);

  const tagRenderer = useCallback((record: any, minValue: any, range: any) => {
    const el = document.createElement("span");
    el.innerText = record.countryName;
    const img = document.createElement('img');
    img.setAttribute("style", "width: auto; height: auto; vertical-align: middle;");
    img.src = "https://www.jqwidgets.com/react/images/close.png";

    img.addEventListener('click', (event: any): void => {
      const path = event.composedPath ? event.composedPath() : event.path;
      const liItem = path[3];
      const ulItem = path[4];
      const id = getIndex(liItem, ulItem);
      const index = myTagCloud.current!.getRenderedTags()[id].index;
      myTagCloud.current!.removeAt(index);

      event.preventDefault();
      event.stopPropagation();
    });

    el.appendChild(img);
    return el;
  }, [getIndex]);

  return (
    <JqxTagCloud
      ref={myTagCloud}
      // @ts-ignore
      width={"100%"}
      source={source}
      displayMember={"countryName"}
      valueMember={"technologyRating"}
      tagRenderer={tagRenderer}
    />
  );
};

export default App;