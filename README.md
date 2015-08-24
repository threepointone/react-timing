react-timing
---

Timing as a component

`npm install react-timing --save`

```js
// an example with react-motion
<Timing from={{top: 1000, left: 0}} sequence={[
  {period: 1000, value:{top: 100, left: 0}},
  {period: 1000, value:{top: 100, left: 100}},
  {period: 1000, value:{top: 0, left: 100}},
  {period: 1000, value:{top: 0, left: 0}}
  ]}>{val =>
    <Spring endValue={{val}}>{ i9ed =>
      <div style={{...i9ed.val, backgroundColor: 'wheat', height: 100, width: 100, position: 'absolute'}}>
        move it
      </div>
    }</Spring>
}</Timing>

```

this is just the start; the hope is to achieve parity with [Greensock's awesome timeline api](http://greensock.com/timelinelite). Open to ideas!