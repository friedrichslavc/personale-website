# Java 笔记

## 目录

1. [Java 简介](#java-简介)
   - [主要特点](#主要特点)
   - [应用领域](#应用领域)
   - [Java 版本](#java-版本)
   - [开发工具](#开发工具)
2. [基础语法](#基础语法)
   - [Hello World 程序](#1-hello-world-程序)
   - [数据类型](#2-数据类型)
   - [变量和常量](#3-变量和常量)
   - [运算符](#4-运算符)
   - [控制结构](#5-控制结构)
3. [面向对象编程](#6-面向对象编程)
4. [集合框架](#7-集合框架)
5. [输入输出](#8-输入输出)
6. [多线程](#9-多线程)
7. [注解](#10-注解)
8. [反射](#11-反射)
9. [泛型](#12-泛型)
10. [枚举](#13-枚举)
11. [内部类](#14-内部类)
12. [异常处理](#15-异常处理)

## Java 简介

Java 是一种广泛使用的面向对象编程语言，由 Sun Microsystems 公司于 1995 年首次发布。它的设计理念是"一次编写，到处运行"（Write Once, Run Anywhere），这使得 Java 成为跨平台开发的理想选择。

### 主要特点

1. **面向对象**：Java 完全支持面向对象编程，包括封装、继承和多态。
2. **平台无关性**：Java 代码编译成字节码，可以在任何支持 Java 虚拟机（JVM）的平台上运行。
3. **安全性**：Java 提供了多层安全机制，包括字节码验证器、安全管理器和沙箱机制。
4. **强类型**：Java 是强类型语言，所有变量必须先声明后使用。
5. **自动内存管理**：Java 使用垃圾回收机制自动管理内存，减少了内存泄漏的风险。
6. **多线程支持**：Java 内置了多线程支持，简化了并发编程。
7. **丰富的标准库**：Java 提供了大量的内置库，涵盖了从网络编程到图形界面开发的各个方面。

### 应用领域

Java 在多个领域广泛应用，包括企业级应用开发（Java EE）、Android 移动应用开发、Web 应用开发、大数据处理（如 Hadoop）、云计算和物联网（IoT）应用。

### Java 版本

Java 持续evolving，主要版本包括 Java 8 (LTS)、Java 11 (LTS) 和 Java 17 (LTS)，每个版本都引入了新的特性和改进。

### 开发工具

常用的 Java 开发工具包括 IntelliJ IDEA、Eclipse、NetBeans 和 Visual Studio Code（配合插件）。

## 基础语法

### 1. Hello World 程序

Java 程序的基本结构：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### 2. 数据类型

Java 有两种主要的数据类型：基本数据类型和引用数据类型。

#### 基本数据类型

1. **整数类型**
   - `byte`: 8位有符号二进制补码整数 (-128 到 127)
   - `short`: 16位有符号二进制补码整数 (-32,768 到 32,767)
   - `int`: 32位有符号二进制补码整数 (-2^31 到 2^31 - 1)
   - `long`: 64位有符号二进制补码整数 (-2^63 到 2^63 - 1)

2. **浮点类型**
   - `float`: 单精度 32 位 IEEE 754 浮点数
   - `double`: 双精度 64 位 IEEE 754 浮点数

3. **字符类型**
   - `char`: 单个 16 位 Unicode 字符 ('\u0000' 到 '\uffff')

4. **布尔类型**
   - `boolean`: 只能是 true 或 false

示例：
```java
byte b = 100;
short s = 10000;
int i = 100000;
long l = 1000000000L;
float f = 234.5f;
double d = 123.4;
char c = 'A';
boolean bool = true;
```

#### 引用数据类型

1. **类（Class）**
   - 用户定义的类型，包含属性和方法。

2. **接口（Interface）**
   - 定义方法签名的抽象类型。

3. **数组（Array）**
   - 固定大小的同类型元素的集合。

4. **枚举（Enum）**
   - 一组预定义的常量。

示例：
```java
// 类
class Person {
    String name;
    int age;
}
Person p = new Person();

// 接口
interface Runnable {
    void run();
}

// 数组
int[] numbers = new int[5];
String[] names = {"Alice", "Bob", "Charlie"};

// 枚举
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
Day today = Day.MONDAY;
```

#### 特殊类型

1. **String**
   - 虽然是一个类，但因为使用频繁，被特殊对待。
   - 字符串字面量用双引号括起来。

```java
String greeting = "Hello, World!";
```

2. **Wrapper Classes**
   - 每个基本类型都有对应的包装类：
     - Byte, Short, Integer, Long, Float, Double, Character, Boolean
   - 用于在需要对象的场合表示基本类型值。

```java
Integer wrappedInt = Integer.valueOf(42);
int primitiveInt = wrappedInt.intValue();
```

#### 类型转换

1. **自动类型转换（隐式转换）**
   - 从小类型到大类型：byte → short → int → long → float → double

2. **强制类型转换（显式转换）**
   - 可能会导致精度损失或溢出。

```java
int i = 100;
long l = i;  // 自动类型转换
int j = (int) l;  // 强制类型转换
```

了解这些数据类型及其特性对于编写高效和正确的 Java 程序至关重要。

### 3. 变量和常量

#### 变量
变量是用于存储数据的容器。在 Java 中，变量必须先声明后使用。

语法：`type variableName = value;`

```java
int count = 0;
String message = "Hello";
double price = 19.99;
```

#### 常量
常量是不可改变的变量，使用 `final` 关键字声明。常量名通常全大写。

语法：`final type CONSTANT_NAME = value;`

```java
final double PI = 3.14159;
final int MAX_USERS = 100;
```

### 4. 运算符

Java 支持多种运算符：

#### 算术运算符
- `+` (加法)
- `-` (减法)
- `*` (乘法)
- `/` (除法)
- `%` (取模)
- `++` (递增)
- `--` (递减)

#### 关系运算符
- `==` (等于)
- `!=` (不等于)
- `>` (大于)
- `<` (小于)
- `>=` (大于等于)
- `<=` (小于等于)

#### 逻辑运算符
- `&&` (与)
- `||` (或)
- `!` (非)

#### 位运算符
- `&` (按位与)
- `|` (按位或)
- `^` (按位异或)
- `~` (按位取反)
- `<<` (左移)
- `>>` (右移)
- `>>>` (无符号右移)

#### 赋值运算符
- `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `&=`, `^=`, `|=`

示例：
```java
int a = 10, b = 20;
int sum = a + b;  // 30
boolean isGreater = a > b;  // false
boolean logicalAnd = (a > 5) && (b < 30);  // true
int bitwiseAnd = a & b;  // 0
a += 5;  // 等同于 a = a + 5
```

### 5. 控制结构

Java 的控制结构用于控制程序的执行流程。

#### 条件语句

1. if-else 语句
```java
if (condition) {
    // 代码块
} else if (anotherCondition) {
    // 代码块
} else {
    // 代码块
}
```

2. switch 语句
```java
switch (variable) {
    case value1:
        // 代码块
        break;
    case value2:
        // 代码块
        break;
    default:
        // 代码块
}
```

#### 循环语句

1. for 循环
```java
for (initialization; condition; update) {
    // 代码块
}
```

2. while 循环
```java
while (condition) {
    // 代码块
}
```

3. do-while 循环
```java
do {
    // 代码块
} while (condition);
```

#### 跳转语句

- `break`: 跳出循环或 switch 语句
- `continue`: 跳过当前循环的剩余部分，开始下一次迭代
- `return`: 从方法返回，并可选择性地返回一个值

### 6. 面向对象编程

Java 是一种面向对象的编程语言，它支持以下面向对象的概念：

#### 类和对象

类是对象的模板，对象是类的实例。

```java
public class Car {
    String brand;
    String model;
    int year;

    public void start() {
        System.out.println("The car is starting.");
    }
}

Car myCar = new Car();
myCar.brand = "Toyota";
myCar.start();
```

#### 继承

继承允许一个类（子类）基于另一个类（父类）来定义。

```java
public class ElectricCar extends Car {
    int batteryCapacity;

    public void charge() {
        System.out.println("The electric car is charging.");
    }
}
```

#### 多态

多态允许使用父类类型的引用指向子类对象。

```java
Car car = new ElectricCar();
car.start();  // 调用 ElectricCar 的 start 方法（如果被重写）
```

#### 接口

接口定义了一个类必须实现的方法集合。

```java
public interface Drivable {
    void drive();
    void stop();
}

public class Car implements Drivable {
    public void drive() {
        System.out.println("The car is driving.");
    }

    public void stop() {
        System.out.println("The car has stopped.");
    }
}
```

#### 抽象类

抽象类是不能被实例化的类，通常包含抽象方法。

```java
public abstract class Vehicle {
    abstract void move();

    public void showInfo() {
        System.out.println("This is a vehicle.");
    }
}
```

这些面向对象的概念是 Java 编程的核心，理解和正确使用它们对于开发健壮和可维护的 Java 应用程序至关重要。

### 7. 集合框架

Java 集合框架提供了一套统一的架构来存储和操作对象组。主要包括以下接口和实现类：

#### List
有序集合，允许重复元素。
- ArrayList: 动态数组实现，随机访问快。
- LinkedList: 双向链表实现，插入和删除快。

```java
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
System.out.println(list.get(0)); // 输出: Apple
```

#### Set
不允许重复元素的集合。
- HashSet: 基于哈希表，无序。
- TreeSet: 基于红黑树，有序。

```java
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(2);
set.add(1); // 不会添加重复元素
System.out.println(set.size()); // 输出: 2
```

#### Map
键值对映射。
- HashMap: 基于哈希表，无序。
- TreeMap: 基于红黑树，键有序。

```java
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 25);
map.put("Bob", 30);
System.out.println(map.get("Alice")); // 输出: 25
```

#### Queue
队列，通常用于存储等待处理的元素。
- LinkedList: 可用作队列的实现。
- PriorityQueue: 优先级队列。

```java
Queue<String> queue = new LinkedList<>();
queue.offer("First");
queue.offer("Second");
System.out.println(queue.poll()); // 输出: First
```

### 8. 输入输出

Java I/O 操作主要通过流（Stream）来完成。

#### 文件操作
使用 `File` 类来表示文件和目录路径。

```java
File file = new File("example.txt");
boolean exists = file.exists();
```

#### 字节流
用于读写二进制数据。
- FileInputStream / FileOutputStream

```java
try (FileInputStream fis = new FileInputStream("input.txt");
     FileOutputStream fos = new FileOutputStream("output.txt")) {
    int content;
    while ((content = fis.read()) != -1) {
        fos.write(content);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

#### 字符流
用于读写文本数据。
- FileReader / FileWriter

```java
try (FileReader reader = new FileReader("input.txt");
     FileWriter writer = new FileWriter("output.txt")) {
    int character;
    while ((character = reader.read()) != -1) {
        writer.write(character);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

#### 缓冲流
提高 I/O 效率。
- BufferedInputStream / BufferedOutputStream
- BufferedReader / BufferedWriter

```java
try (BufferedReader br = new BufferedReader(new FileReader("input.txt"));
     BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        bw.write(line);
        bw.newLine();
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### 9. 多线程

Java 支持多线程编程，可以通过继承 `Thread` 类或实现 `Runnable` 接口来创建线程。

#### 创建线程

```java
// 方法1：继承 Thread 类
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

// 方法2：实现 Runnable 接口
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable is running");
    }
}

// 使用
MyThread thread1 = new MyThread();
thread1.start();

Thread thread2 = new Thread(new MyRunnable());
thread2.start();
```

#### 线程同步
使用 `synchronized` 关键字或 `Lock` 接口来实现线程同步。

```java
public synchronized void synchronizedMethod() {
    // 同步方法
}

private final Object lock = new Object();
public void synchronizedBlock() {
    synchronized(lock) {
        // 同步块
    }
}
```

#### 线程通信
使用 `wait()`, `notify()`, 和 `notifyAll()` 方法进行线程间通信。

```java
synchronized void produce() throws InterruptedException {
    while (/* 条件不满足 */) {
        wait();
    }
    // 生产逻辑
    notify();
}

synchronized void consume() throws InterruptedException {
    while (/* 条件不满足 */) {
        wait();
    }
    // 消费逻辑
    notify();
}
```

#### 线程池
使用 `ExecutorService` 来管理线程池。

```java
ExecutorService executor = Executors.newFixedThreadPool(5);
executor.submit(() -> {
    System.out.println("Task executed by " + Thread.currentThread().getName());
});
executor.shutdown();
```

### 10. 注解

注解是 Java 5 引入的一种特殊类型的接口，用于为代码提供元数据。

#### 内置注解
- `@Override`: 表示方法重写
- `@Deprecated`: 表示元素已过时
- `@SuppressWarnings`: 抑制编译器警告

#### 自定义注解

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MyAnnotation {
    String value() default "Default value";
}

// 使用自定义注解
public class MyClass {
    @MyAnnotation(value = "Custom value")
    public void myMethod() {
        // 方法实现
    }
}
```

#### 注解处理
使用反射 API 来处理运行时注解。

```java
Method method = MyClass.class.getMethod("myMethod");
if (method.isAnnotationPresent(MyAnnotation.class)) {
    MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);
    System.out.println(annotation.value());
}
```

### 11. 反射

反射允许在运行时检查和操作类、方法、字段等。

#### 获取 Class 对象

```java
// 方法1
Class<?> cls1 = MyClass.class;

// 方法2
MyClass obj = new MyClass();
Class<?> cls2 = obj.getClass();

// 方法3
Class<?> cls3 = Class.forName("com.example.MyClass");
```

#### 检查类的结构

```java
Class<?> cls = MyClass.class;

// 获取所有公共方法
Method[] methods = cls.getMethods();

// 获取所有字段
Field[] fields = cls.getDeclaredFields();

// 获取构造函数
Constructor<?>[] constructors = cls.getConstructors();
```

#### 创建实例和调用方法

```java
Class<?> cls = MyClass.class;
Object obj = cls.newInstance();

Method method = cls.getMethod("myMethod", String.class);
method.invoke(obj, "Hello");
```

#### 修改字段值

```java
Class<?> cls = MyClass.class;
Object obj = cls.newInstance();

Field field = cls.getDeclaredField("myField");
field.setAccessible(true);
field.set(obj, "New Value");
```

反射是一个强大的特性，但应谨慎使用，因为它可能会降低性能并破坏封装性。

### 12. 泛型

Java 泛型是 JDK 5 引入的一个重要特性，它允许在定义类、接口和方法时使用类型参数。泛型提供了编译时类型安全检查机制，可以在编译时检测到非法的类型。

#### 泛型类

泛型类的定义：

```java
public class Box<T> {
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
}

// 使用泛型类
Box<Integer> integerBox = new Box<Integer>();
integerBox.set(10);
Integer someInteger = integerBox.get();
```

#### 泛型方法

泛型方法的定义：

```java
public class Util {
    public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
        return p1.getKey().equals(p2.getKey()) &&
               p1.getValue().equals(p2.getValue());
    }
}

// 使用泛型方法
Pair<Integer, String> p1 = new Pair<>(1, "apple");
Pair<Integer, String> p2 = new Pair<>(2, "pear");
boolean same = Util.<Integer, String>compare(p1, p2);
```

#### 有界类型参数

使用有界类型参数来限制泛型的类型：

```java
public class NaturalNumber<T extends Number> {
    private T n;

    public NaturalNumber(T n)  { this.n = n; }
    public boolean isEven() {
        return n.intValue() % 2 == 0;
    }
}

// 使用有界类型参数
NaturalNumber<Integer> evenNumber = new NaturalNumber<>(2);
boolean isEven = evenNumber.isEven();
```

#### 通配符

使用通配符来增加灵活性：

```java
public static void printList(List<?> list) {
    for (Object elem : list)
        System.out.print(elem + " ");
    System.out.println();
}

// 使用通配符
List<Integer> li = Arrays.asList(1, 2, 3);
List<String>  ls = Arrays.asList("one", "two", "three");
printList(li);
printList(ls);
```

#### 复杂泛型示例

以下是一个更复杂的泛型示例，展示了泛型在实际应用中的用法：

```java
import java.util.*;

// 泛型接口
interface Converter<F, T> {
    T convert(F from);
}

// 泛型类实现泛型接口
class StringToIntConverter implements Converter<String, Integer> {
    @Override
    public Integer convert(String from) {
        return Integer.valueOf(from);
    }
}

// 泛型方法
class GenericMethods {
    public <T extends Comparable<T>> T findMax(List<T> list) {
        if (list == null || list.isEmpty()) {
            return null;
        }
        return Collections.max(list);
    }
}

// 复杂的泛型类
class ComplexGeneric<T extends Number & Comparable<T>> {
    private List<T> numbers;

    public ComplexGeneric() {
        this.numbers = new ArrayList<>();
    }

    public void addNumber(T number) {
        numbers.add(number);
    }

    public T getMax() {
        return new GenericMethods().findMax(numbers);
    }

    public <U> Map<T, U> zipWith(List<U> other) {
        Map<T, U> result = new HashMap<>();
        int size = Math.min(numbers.size(), other.size());
        for (int i = 0; i < size; i++) {
            result.put(numbers.get(i), other.get(i));
        }
        return result;
    }
}

// 使用示例
public class GenericExample {
    public static void main(String[] args) {
        // 使用泛型接口和类
        Converter<String, Integer> converter = new StringToIntConverter();
        Integer converted = converter.convert("123");
        System.out.println("Converted: " + converted);

        // 使用复杂泛型类
        ComplexGeneric<Double> complex = new ComplexGeneric<>();
        complex.addNumber(3.14);
        complex.addNumber(2.71);
        complex.addNumber(1.41);

        System.out.println("Max number: " + complex.getMax());

        List<String> strings = Arrays.asList("pi", "e", "sqrt2");
        Map<Double, String> zipped = complex.zipWith(strings);
        System.out.println("Zipped result: " + zipped);

        // 使用泛型方法
        GenericMethods gm = new GenericMethods();
        List<String> stringList = Arrays.asList("apple", "banana", "cherry");
        String maxString = gm.findMax(stringList);
        System.out.println("Max string: " + maxString);
    }
}
```

这个复杂的示例展示了泛型在接口、类、方法中的多种用法，包括有界类型参数、泛型方法、以及泛型类中的复杂操作。它演示了如何使用泛型来创建灵活且类型安全的代码。

泛型的使用可以显著提高代码的重用性和类型安全性，但也增加了代码的复杂度。在实际应用中，应根据具体需求来权衡使用泛型的程度。

### 13. 枚举

Java 枚举是一种特殊的类，主要用于定义常量。它们提供了类型安全性和更多的功能compared to传统的常量定义方式。

#### 基本枚举

最简单的枚举定义：

```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// 使用枚举
Day today = Day.MONDAY;
System.out.println(today); // 输出: MONDAY
```

#### 带有构造函数和方法的枚举

枚举可以包含构造函数、字段和方法：

```java
public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS  (4.869e+24, 6.0518e6),
    EARTH  (5.976e+24, 6.37814e6),
    MARS   (6.421e+23, 3.3972e6),
    JUPITER(1.9e+27,   7.1492e7),
    SATURN (5.688e+26, 6.0268e7),
    URANUS (8.686e+25, 2.5559e7),
    NEPTUNE(1.024e+26, 2.4746e7);

    private final double mass;   // 质量（千克）
    private final double radius; // 半径（米）

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double getMass() { return mass; }
    public double getRadius() { return radius; }

    // 计算表面重力
    public double surfaceGravity() {
        double G = 6.67300E-11; // 重力常数
        return G * mass / (radius * radius);
    }
}

// 使用带有方法的枚举
Planet earth = Planet.EARTH;
System.out.println("地球的表面重力: " + earth.surfaceGravity() + " m/s^2");
```

#### 实现接口的枚举

枚举可以实现一个或多个接口：

```java
public interface Describable {
    String getDescription();
}

public enum Season implements Describable {
    SPRING("温暖的季节"),
    SUMMER("炎热的季节"),
    AUTUMN("凉爽的季节"),
    WINTER("寒冷的季节");

    private final String description;

    Season(String description) {
        this.description = description;
    }

    @Override
    public String getDescription() {
        return description;
    }
}

// 使用实现接口的枚举
Season summer = Season.SUMMER;
System.out.println("夏天是" + summer.getDescription());
```

#### EnumSet 和 EnumMap

Java 提供了专门用于枚举的集合类：

```java
import java.util.EnumSet;
import java.util.EnumMap;

public class EnumCollections {
    public static void main(String[] args) {
        // EnumSet 示例
        EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);
        System.out.println("周末: " + weekend);

        // EnumMap 示例
        EnumMap<Season, String> seasonActivities = new EnumMap<>(Season.class);
        seasonActivities.put(Season.SPRING, "赏花");
        seasonActivities.put(Season.SUMMER, "游泳");
        seasonActivities.put(Season.AUTUMN, "赏枫");
        seasonActivities.put(Season.WINTER, "滑雪");

        System.out.println("冬天的活动: " + seasonActivities.get(Season.WINTER));
    }
}
```

#### 枚举的 switch 语句

枚举可以很方便地用在 switch 语句中：

```java
public class EnumSwitch {
    public static void main(String[] args) {
        Day today = Day.WEDNESDAY;
        switch (today) {
            case MONDAY:
                System.out.println("星期一");
                break;
            case TUESDAY:
                System.out.println("星期二");
                break;
            case WEDNESDAY:
                System.out.println("星期三");
                break;
            // ... 其他情况
            default:
                System.out.println("周末");
        }
    }
}
```

枚举提供了一种优雅的方式来定义一组固定的常量。它们不仅提高了代码的可读性和类型安全性，还允许添加方法和字段，使得常量更加强大和灵活。在需要表示一组固定值的场景中，枚举是一个很好的选择。

### 14. 内部类

Java 内部类是定义在另一个类内部的类。内部类可以更好地封装代码，并且可以访问外部类的私有成员。Java 支持四种类型的内部类：

#### 1. 成员内部类

成员内部类是最常见的内部类，定义在外部类的成员位置。

```java
public class OuterClass {
    private int outerField = 1;

    class InnerClass {
        public void printOuterField() {
            System.out.println("Outer field: " + outerField);
        }
    }

    public void createInner() {
        InnerClass inner = new InnerClass();
        inner.printOuterField();
    }
}

// 使用成员内部类
OuterClass outer = new OuterClass();
OuterClass.InnerClass inner = outer.new InnerClass();
inner.printOuterField();
```

#### 2. 局部内部类

局部内部类定义在方法或作用域内。

```java
public class OuterClass {
    public void someMethod() {
        class LocalInnerClass {
            public void printMessage() {
                System.out.println("This is a local inner class");
            }
        }

        LocalInnerClass local = new LocalInnerClass();
        local.printMessage();
    }
}
```

#### 3. 匿名内部类

匿名内部类是没有名字的局部内部类，用于创建只使用一次的类。

```java
interface Greeting {
    void greet();
}

public class AnonymousExample {
    public void sayHello() {
        Greeting greeting = new Greeting() {
            @Override
            public void greet() {
                System.out.println("Hello from anonymous inner class!");
            }
        };
        greeting.greet();
    }
}
```

#### 4. 静态内部类

静态内部类是使用 static 关键字定义的内部类，不依赖于外部类的实例。

```java
public class OuterClass {
    private static int staticOuterField = 1;

    static class StaticInnerClass {
        public void printStaticOuterField() {
            System.out.println("Static outer field: " + staticOuterField);
        }
    }
}

// 使用静态内部类
OuterClass.StaticInnerClass staticInner = new OuterClass.StaticInnerClass();
staticInner.printStaticOuterField();
```

#### 内部类的特点和用途

1. **封装性**：内部类可以访问外部类的私有成员，提供了更好的封装。

2. **代码组织**：内部类可以让代码结构更清晰，特别是当一个类只在另一个类中使用时。

3. **回调机制**：匿名内部类常用于实现回调函数或事件处理。

4. **多重继承**：Java 不支持类的多重继承，但通过内部类可以模拟这种机制。

5. **静态内部类**：用于将逻辑分组，同时不需要访问外部类的非静态成员。

内部类是 Java 中一个强大的特性，它提供了更灵活的代码组织方式，但也增加了代码的复杂性。在使用内部类时，应权衡其优缺点，选择最适合特定场景的方式。

### 15. 异常处理

Java 的异常处理机制用于处理程序运行时发生的错误和异常情况。它允许我们优雅地处理错误，而不是让程序崩溃。

#### 异常层次结构

Java 的所有异常都是 `Throwable` 类的子类，主要分为两类：

1. **Error**：表示严重的问题，通常是不可恢复的系统级错误。
2. **Exception**：表示可以被程序处理的问题。
   - **Checked Exception**：必须被显式处理或声明抛出。
   - **Unchecked Exception**（RuntimeException）：不强制处理。

#### try-catch-finally 语句

基本的异常处理结构：

```java
try {
    // 可能抛出异常的代码
} catch (ExceptionType1 e1) {
    // 处理 ExceptionType1
} catch (ExceptionType2 e2) {
    // 处理 ExceptionType2
} finally {
    // 无论是否发生异常都会执行的代码
}
```

#### 多重捕获

Java 7 引入了多重捕获特性：

```java
try {
    // 可能抛出异常的代码
} catch (IOException | SQLException e) {
    // 处理 IOException 或 SQLException
}
```

#### try-with-resources 语句

Java 7 引入的自动资源管理：

```java
try (FileInputStream fis = new FileInputStream("file.txt");
     FileOutputStream fos = new FileOutputStream("output.txt")) {
    // 使用 fis 和 fos
} catch (IOException e) {
    // 处理异常
}
```

#### 抛出异常

使用 `throw` 关键字抛出异常：

```java
public void divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("除数不能为零");
    }
    System.out.println(a / b);
}
```

#### 自定义异常

创建自定义异常类：

```java
public class CustomException extends Exception {
    public CustomException() {
        super();
    }

    public CustomException(String message) {
        super(message);
    }

    public CustomException(String message, Throwable cause) {
        super(message, cause);
    }
}
```

使用自定义异常：

```java
public void checkAge(int age) throws CustomException {
    if (age < 0) {
        throw new CustomException("年龄不能为负数");
    }
}
```

#### 异常链

在捕获异常后抛出新的异常，同时保留原始异常信息：

```java
try {
    // 可能抛出异常的代码
} catch (SQLException e) {
    throw new RuntimeException("数据库操作失败", e);
}
```

#### 最佳实践

1. 只捕获那些你能够处理的异常。
2. 在 finally 块中释放资源。
3. 使用具体的异常类型而不是笼统的 Exception。
4. 适当地记录异常信息。
5. 不要在 finally 块中抛出异常。
6. 优先使用标准异常。
7. 不要忽视异常（空 catch 块）。

异常处理是 Java 程序健壮性的重要保障。正确使用异常处理机制可以让程序更加可靠和易于维护。