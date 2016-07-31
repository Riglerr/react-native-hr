# react-native-hr

=========
react-native-hr brings htmls'  `<hr />`  to react-native. <br />
It also brings some extra functionality:
  <ul>
    <li>Overayling text onto the line.</li>
    <li>Changing text colour.</li>
    <li>Changing line colour.</li>
  </ul>

## Props
<table>
  <th>
    <tr>
      <td>Name</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
  </th>
  <tbody>
    <tr>
      <td><code>lineColor<code></td>
      <td><code>string<code></td>
      <td><em>(Required)</em> The colour of the line.</td>
    </tr>
    <tr>
      <td><code>text<code></td>
      <td><code>string<code></td>
      <td><em>(Optional)</em> The text to display on the line (centered) </td>
    </tr>
    <tr>
      <td><code>textColor<code></td>
      <td><code>string<code></td>
      <td><em>(Optional)</em> The color of the text (defaults to black) </td>
    </tr>
  </tbody>
</table>

## Usage

#### Solid Line
`
  <Hr lineColor='#b3b3b3'/>
`

#### Solid Line with text
`
  <Hr lineColor='#b3b3b3'
      text='react-native'
  />
`

#### Solid Line with text and textColor
`<Hr lineColor='#b3b3b3'
      text='react-native'
      textColor='steelblue'
  />`

[![Imgur](http://i.imgur.com/nLvVJnE.png)]