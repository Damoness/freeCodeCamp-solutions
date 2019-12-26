
## 定义变量
$text-color: red;

## 嵌套 CSS

.parent {

    .children {

    }

}

## mixin 重用 css ,相当于函数

@mixin box-shadow($x, $y, $blur, $c){
  -webkit-box-shadow: $x, $y, $blur, $c;
  -moz-box-shadow: $x, $y, $blur, $c;
  -ms-box-shadow: $x, $y, $blur, $c;
  box-shadow: $x, $y, $blur, $c;
}

## @if , @if else , @else 

## @for

    @for $i from 1 to 6 {
      .text-#{$i} {font-size:2 + 10 * $i;}
    }

## while

    $x:1;
    @while $x< 13 {
      .text-#{$x} { font-size: 2 + 10 * $x ;}
      $x: $x + 1;
    }

## @import 


## @extend 