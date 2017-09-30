##The Obligitory Floor Model


```php
if_opts_array(
	'IFCASES'=> array('gender' => 'male', 'gender' => 'female', 'gender' => 'mom'),
	'IFINCREMENT' => 1,
	'IFOFFSET' => NULL
 );
 
if($data) {
    //what to do with the first array value
break;
notnow:
    //instructions for the data after the first array value
break;
notyet:
    //instructions for the end array value
break;
when:
    //error handling
}
```
###The Breakdown
This is a framework or built-in function idea. If your counting an array this gives you more incremental control at the cost of manually calculating your own offset but that's partially why one might use this. hence the simplistic ways of saying "zero"
```php
if($data=array(), $options=array()[, $increment) {
```
* `elseif`aka `notnow`, as in there's more to this loop template.
* bootstrap's grid replaces `<table>` and is always 12 cells wide.
* If more cells are needed it allows nesting grids.
* For less cells use css class `.col-#` It's equivalent is `<td col-span="2">`

```php
return text-wrapper-for-col1($arrayname['array_data_chunk']);
}elseif($i>0 && $i<12){
```
For fun, I want to alias `elseif` to `notyet` to use as sub-sequential elseif statments. it's completely arbitrary but it does add uniqueness that separates the loop function from the if function/statement. I just don't know that that justifies a new node.
```php
return normal-text-wrapper($arrayname['array_data_chunk']);
}elseif(){
```
`Else` or `when` (Say, 'when.'") is the final piece but it's not really the same. This will be the place where the instructions go for the end of the array that is cycling through it. Usually as you are more than aware of, a loop would keep going unless you put in a `die();` or `exit();`  but 'when' will stop when the array has no more data to provide.
```php
}else{

}
```
`when` a.k.a `else` would be the ending. Now, I know what you might think, this is completely pointless and a great recipe for disaster. If you weren't thinking that then it was my thoughts thinking again. The idea would be that this would combine the versitility and simplicity of `if();` with the individuality of `switch();` and provide and basically cram an `array_walk($array,'function-to-apply');` or `array_walk_recursive($array,'function-to-apply');`  where the second argument wouldn't be needed because it's basically `self`. It increments on its own for a few reasons. It allows a lot of control while keeping the incrementing value in a private variable (no need to unset it at the end or worry aboutit being shared) and because of this you don't have to hspecify the cases for the first and last array values as it just assumes thos instructions are after the `if(){` and in the `notyet(){` areas.
  
  There would be 2 ways this would accept being written. The above would be one way but for those of us who appreciate cleaner code `if($data=array(), $options=array()[, $increment)  ` array arguments in the beginning could be used and everything after it would get it's instructions from the 2nd array argument.

`if...notnow...when` is obviously a little forced I thought of the name on the fly but I like the functionality of it. I want to build it when I have time.

## A more complete model:

```php
if_opts(IFCASES, array('gender' => 'male', 'gender' => 'female', 'gender' => 'mom'));
if_opts(IFINCREMENT, 1);
if_opts(IFOFFSET, NULL);
```
or
```php
if_opts_array(
	IFCASES => array('gender' => 'male', 'gender' => 'female', 'gender' => 'mom'),
	IFINCREMENT => 1,
	IFOFFSET => NULL,
  IF_PREINC =>  false, //are we pre-incrementing? --n/++n (IFPOST would be confused with a method)
 );
 
if($data) {
    //what to do with the first array value
break;
notnow:
    //instructions for the data after the first array value
break;
notyet:
    //instructions for the end array value
break;
when:
    //error handling
}
```
##And we would produce something like:

|header 1   |header 2          |header 3                  |header 4       |
|:---------:|:----------------:|:------------------------:|:-------------:|
|`Beginning`|**something else**|_Another different column_|done, next row!|
|`Beginning`|**something else**|_Another different column_|done, next row!|
|`Beginning`|**something else**|_Another different column_|done, next row!|
|`Beginning`|**something else**|_Another different column_|done, next row!|
|`Beginning`|**something else**|_Another different column_|done, next row!|

...if we were outputing data into a table.

<img class="center" src="https://img1.etsystatic.com/010/0/5429221/il_570xN.449788387_wqpy.jpg" alt="If I am not for myself, who is for me? And if I am only for myself, what am I? And if not now, when?">