function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const dataview = new DataView(arrayBuffer, 0);

  if (position > length - 1) {
    throw Error('Position outside range');
  }

  dataview.setInt8(position, value);

  return dataview;
}

export default createInt8TypedArray;
