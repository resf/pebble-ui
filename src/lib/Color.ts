/**
 * Colour definitions, indexed by the name of the colour, with the value array
 * containing two elements, background and foreground. In that order.
 */
const colors = {
  light: ['white', 'gray-900', 'gray-200'],
  primary: ['green-500', 'white', 'green-200'],
  success: ['green-500', 'white', 'green-200'],
  danger: ['red-500', 'white', 'red-200'],
  warning: ['yellow-500', 'white', 'yellow-200'],
  info: ['blue-500', 'white', 'blue-200'],
  like: ['pink-500', 'white', 'pink-200'],
} as { [key: string]: string[] };

export default colors;
