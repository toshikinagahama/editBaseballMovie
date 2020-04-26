import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

function object_array_sort(data, key, order, fn) {
  //デフォは降順(DESC)
  var num_a = -1;
  var num_b = 1;

  if (order === 'asc') {
    //指定があれば昇順(ASC)
    num_a = 1;
    num_b = -1;
  }

  data = data.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    if (x > y) return num_a;
    if (x < y) return num_b;
    return 0;
  });

  fn(data); // ソート後の配列を返す
}

function CommandDownload() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.data);
  let command = ''; //ffmpeg用コマンド

  const buttonClick = (e) => {
    console.log(data);
    command = 'ffmpeg -i video2.mp4 -i logo.png -filter_complex';
    //ソートする
    object_array_sort(data, 'Time', 'asc', function (new_data) {
      data = new_data;
    });
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val1, index1) => {
      ['表', '裏'].map((val2, index2) => {
        let tmpData = data.filter(function (item, index3) {
          let s = val1 + '回' + val2;
          if (item.Event1.includes(s)) {
            return true;
          }
        });
        console.log(tmpData);
      });
    });
  };

  return (
    <Button variant="contained" color="primary" onClick={buttonClick}>
      動画編集コマンドダウンロード
    </Button>
  );
}

export default CommandDownload;
