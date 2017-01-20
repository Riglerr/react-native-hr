# react-native-hr

=========
react-native-hr brings htmls'  `<hr />`  to react-native. <br />
It also brings some extra functionality:
  <ul>
    <li>Overayling text onto the line.</li>
    <li>Changing text style.</li>
    <li>Changing line style.</li>
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
      <td><code>lineStyle<code></td>
      <td><code>Object<code></td>
      <td><em>(Optional)</em> The style object for line(View).</td>
    </tr>
    <tr>
      <td><code>text<code></td>
      <td><code>string<code></td>
      <td><em>(Optional)</em> The text to display on the line (centered) </td>
    </tr>
    <tr>
      <td><code>textStyle<code></td>
      <td><code>Object<code></td>
      <td><em>(Optional)</em> The color of the text</td>
    </tr>
  </tbody>
</table>

## Usage

#### Solid Line
```
  <Hr />
```

#### Line with left margin
```
  <Hr marginLeft={50} />
```

#### Line with text
```
  <Hr text="react-native" />
```


#### Line with text and text style
```
  <Hr text="text style"
      textStyle={{
          color: "red", fontSize: 20,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "#000"
       }}
   />
```


#### Line with line style
```
  <Hr text="line style"
      lineStyle={{
          backgroundColor: "blue",
          height: 4
       }}
   />
```


#### Line style and text style
```
  <Hr lineColor='red' text='line style and text style'
      lineStyle={{
          backgroundColor: "blue",
          height: 2
       }}
       textStyle={{
          color: "green",
          fontSize: 20,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "#000"
       }}
    />
```


[![Imgur](https://github.com/priyesh9875/react-native-hr/blob/master/Screenshot_1483257401.png)
