declare class PieceTable {
    private readonly originBuffer;
    private addBuffer;
    private piecesTable;
    constructor(defaultText?: string);
    private sequenceOffsetToPieceIndexAndBufferOffset;
    insert: (str: string, offset: number) => void;
    delete: (offset: number, count: number) => void;
    getSequence: () => string;
}
export default PieceTable;
//# sourceMappingURL=index.d.ts.map