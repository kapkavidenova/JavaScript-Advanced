describe('isSymmetric', () => {

    it('return true for valid symmetric input', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });

    it('return false for valid non-symmetric input', () => {
        expect(isSymmetric([1,2])).to.be.false;
    });

    it('returns false for invalid argument',()=>{
        expect(isSymmetric('a')).to.be.false;
    });

    //test overloading
    it('returns true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1, 1,1])).to.be.true;
    });
    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a','a'])).to.be.true;
    });
    it('return false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a','b'])).to.be.false;
    });
    it('return false for different type elements', () => {
        expect(isSymmetric(['1',1])).to.be.false;
    });
});
