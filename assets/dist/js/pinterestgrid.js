import { CSSGrid, measureItems, makeResponsive } from 'react-stonecutter';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

<SpringGrid
  component="ul"
  // ...etc.
>
  {data.map((datum) => (
    <li key={datum.id}>
      <MyComponent datum={datum} />
    </li>
  ))}
</SpringGrid>
