var expect = require('expect.js');
describe('Array',function(){
  describe('#concat()',function(){
    it('引数に配列を渡した際に、その配列を展開して結合した新しい配列を返すこと',function(){
      var a = ['a','b','c'];
      var b = ['x','y','z'];
      var actual = a.concat(b,true);
      expect(actual).to.eql(['a','b','c','x','y','z',true]);
    });
  });
  describe('#join()',function(){
    it('引数を省略すると、","で連結されること',function(){
      var a = ['a','b'];
      var actual = a.join();
      expect(actual).to.be('a,b');
    });
    it('引数に"\\n"を与えると"\\n"で連結されること',function(){
      var a = ['a','b'];
      var actual = a.join('\n');
      expect(actual).to.be('a\nb');
    });
  });
  describe('#pop()',function(){
    it('最後の要素を削除すること',function(){
      var a = ['a','b'];
      a.pop();
      expect(a).to.eql(['a']);
    });
    it('最後の要素を返すこと',function(){
      var a = ['a','b'];
      var actual = a.pop();
      expect(actual).to.eql('b');
    });
    it('配列が空の場合、`undefined`を返すこと',function(){
      var a = [];
      var actual = a.pop();
      expect(actual).to.eql(undefined); //一度stringに直して評価するからクールじゃない！
      expect(actual).to.be.an('undefined'); //anはtypeofで評価する これはクール！
    });
  });
  describe('#reverse()', function(){
    it('要素を逆の順番に入れ替えること', function(){
      var a = ['t','o','p'];
      var actual = a.reverse();
      expect(actual).to.eql(['p','o','t']);
    });
    it('配列自身を置き換えること', function(){
      var a = ['t','o','p'];
      a.reverse();
      expect(a).to.eql(['p','o','t']);
    });
  });
  describe('#shift()', function(){
    it('先頭の要素を削除すること', function(){
      var a = ['i','P','a','d'];
      a.shift();
      expect(a).to.eql(['P','a','d']);
    });
    it('先頭の要素を返すこと', function(){
      var a = ['i','P','a','d'];
      var actual = a.shift();
      expect(actual).to.be('i');
    });
    it('配列が空の場合、`undefined`を返すこと', function(){
      var a = [];
      var actual = a.shift();
      var undefined = 'bug'; //bug code!!
      //expect(actual).to.be(undefined); //===での比較 bug code があるとしぬ
      //expect(actual).to.eql(undefined); //==での比較 一度文字列に置き換えているのであんくーる
      expect(actual).to.be.an('undefined'); //typeof 'undefined' するのでクール！
    });
  });
  describe('#slice()', function(){
    it('マイナスの値を指定した場合、lengthの値を足したindex以降の値を返すこと', function(){
      var a = [1,2,3,4];
      var actual = a.slice(-2);
      // -2+4=2 なので [3,4] が返ってくる
      expect(actual).to.eql([3,4]);
    });
  });
});  
