
describe('Buffers', () => {
  it('creates a buffer with length 10', () => {
    const buff = Buffer.alloc(10);
    expect(buff).toHaveLength(10);
  });

  it('creates a buffer from a string', () => {
    const string = Buffer.from('hi');
    expect(string.toString()).toEqual('hi');
  });

  it('maps over buffer', () => {
    const string = Buffer.from('hi there');
    const mapped = string.map(() => 104);
    console.log(mapped.toString());
  });

  it('creates from hex codes', () => {
    const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
    console.log(smile);
    console.log(smile.toString());
    console.log(smile.toString('binary'));
  });

});
