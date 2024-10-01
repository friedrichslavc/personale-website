# Java 布尔值（Boolean）

布尔（Boolean）是 Java 中的一种基本数据类型，用于表示逻辑值。布尔类型只有两个可能的值：`true` 和 `false`。布尔值在条件语句、循环控制和逻辑运算中起着关键作用。

## 1. 布尔变量声明和初始化

在 Java 中，可以使用 `boolean` 关键字声明布尔变量：

```java
boolean
```

布尔变量可以初始化为 `true` 或 `false`：

```java
boolean isTrue = true;
boolean isFalse = false;
```

## 2. 布尔运算符

布尔运算符用于在布尔表达式中进行逻辑运算。以下是一些常用的布尔运算符：

- `&&`：逻辑与运算符，当两个条件都为真时，结果为真。
- `||`：逻辑或运算符，当至少一个条件为真时，结果为真。
- `!`：逻辑非运算符，用于取反。

示例：

```java
boolean a = true;
boolean b = false;
boolean result1 = a && b; // result1 为 false
boolean result2 = a || b; // result2 为 true
boolean result3 = !a; // result3 为 false
```

## 3. 布尔表达式

布尔表达式是包含布尔变量和布尔运算符的表达式。布尔表达式的结果为布尔值 `true` 或 `false`。  

示例：

```java
int x = 10;
int y = 5;
boolean result = (x > y) && (x < 15); // result 为 true
```     

## 4. 布尔值的应用

布尔值在条件语句、循环控制和逻辑运算中广泛使用。以下是一些常见的应用场景：

- 条件语句：

```java
if (isTrue) {
    System.out.println("isTrue is true");
}
```

- 循环控制：

```java
while (isTrue) {
    System.out.println("isTrue is true");
}
```

- 逻辑运算：

```java
boolean result = (isTrue && isFalse) || (isTrue && !isFalse); // result 为 true
```

## 5. 布尔值的转换  

布尔值可以转换为其他数据类型，例如整数类型。以下是一些常见的转换：

- 布尔值转换为整数：

```java
boolean b = true;
int i = b ? 1 : 0; // i 为 1
``` 

- 整数类型转换为布尔值：

```java
int i = 1;
boolean b = (i != 0); // b 为 true
``` 

## 6. 布尔值的注意事项

- 布尔值不能转换为其他数据类型，例如字符串类型。
- 布尔值不能转换为其他布尔类型。
- 布尔值不能转换为其他布尔类型。

## 7. 布尔值的示例代码

```java
public class BooleanExample {
    public static void main(String[] args) {
        // 布尔变量声明和初始化
        // 布尔变量声明和初始化
        boolean isTrue = true;  
        boolean isFalse = false;

        // 布尔运算符
        boolean result1 = isTrue && isFalse; // result1 为 false
        boolean result2 = isTrue || isFalse; // result2 为 true
        boolean result3 = !isTrue; // result3 为 false

        // 布尔表达式
        int x = 10;
        int y = 5;
        boolean result = (x > y) && (x < 15); // result 为 true

        // 布尔值的应用
        if (isTrue) {
            System.out.println("isTrue is true");
        }

        // 循环控制
        while (isTrue) {
            System.out.println("isTrue is true");
        }

        // 逻辑运算
        boolean result = (isTrue && isFalse) || (isTrue && !isFalse); // result 为 true
    }   
}
```
