import PieceTable from '../index';

describe('PieceTable', () => {
	test('test insert offset error', () => {
		const pieceTable = new PieceTable('123');
		expect(() => pieceTable.insert('456', 4)).toThrowError(new Error('offset 超出范围'));
		expect(() => pieceTable.insert('', 4)).toThrowError(new Error('字符串不能为空'));
	});

	test('test insert', () => {
		const pieceTable = new PieceTable('123');
		// insert end
		pieceTable.insert('456', 3);
		expect(pieceTable.getSequence()).toBe('123456');
		// insert begin
		pieceTable.insert('789', 0);
		expect(pieceTable.getSequence()).toBe('789123456');
		// insert ceneer
		pieceTable.insert('000', 2);
		expect(pieceTable.getSequence()).toBe('780009123456');
	});

	test('test delete offset error', () => {
		const pieceTable = new PieceTable('123');
		expect(() => pieceTable.delete(1, 6)).toThrowError(new Error('offset 超出范围'));
		expect(() => pieceTable.delete(1, 0)).toThrowError(new Error('count 参数错误, 不能删除小于等于0个'));
	});

	test('test delete', () => {
		const pieceTable = new PieceTable('123456789');
		// delete begin
		pieceTable.delete(0, 1)
		expect(pieceTable.getSequence()).toBe('23456789');
		// delete end
		pieceTable.delete(7, 1)
		expect(pieceTable.getSequence()).toBe('2345678');
		// delete center
		pieceTable.delete(3, 3)
		expect(pieceTable.getSequence()).toBe('2348');
	});
});