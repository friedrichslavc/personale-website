# Java 数组

数组是 Java 中用于存储多个同类型值的容器对象。它们在内存中是连续存储的，可以通过索引快速访问元素。数组在 Java 中是对象，因此具有对象的所有基本特性。

## 1. 声明和创建数组

在 Java 中，有两种方式声明数组：

```java
// 方式 1（推荐）
dataType[] arrayName;

// 方式 2
dataType arrayName[];
```

例如：

```java
int[] numbers;
String[] names;

// 创建数组对象并指定大小
numbers = new int[5]; // 创建一个可以存储 5 个整数的数组
names = new String[10]; // 创建一个可以存储 10 个字符串的数组

// 声明和创建可以在一行完成
double[] prices = new double[100];
```

注意：当创建一个数组时，所有元素都会被初始化为该类型的默认值（如 int 为 0，boolean 为 false，对象引用为 null）。

## 2. 初始化数组

可以在创建数组时直接初始化：

```java
int[] numbers = {1, 2, 3, 4, 5};
String[] fruits = {"Apple", "Banana", "Orange"};

// 使用 new 关键字的另一种语法
int[] moreNumbers = new int[]{6, 7, 8, 9, 10};

// 创建并初始化二维数组
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

## 3. 访问和修改数组元素

使用索引访问和修改数组元素，索引从 0 开始：

```java
int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers[0]); // 输出 10
numbers[1] = 25; // 修改第二个元素
System.out.println(numbers[1]); // 输出 25

// 访问二维数组元素
{% raw %}
int[][] matrix = {{1, 2}, {3, 4}};{% endraw %}
System.out.println(matrix[0][1]); // 输出 2
matrix[1][0] = 5; // 修改第二行第一列的元素
```


## 4. 数组长度

使用 length 属性获取数组长度：

```java
int[] numbers = {1, 2, 3, 4, 5};
System.out.println(numbers.length); // 输出 5
{% raw %}
// 二维数组的长度
int[][] matrix = {{1, 2}, {3, 4}, {5, 6}};
System.out.println(matrix.length); // 输出 3（行数）
System.out.println(matrix[0].length); // 输出 2（第一行的列数）
```
{% endraw %}
## 5. 遍历数组

### 5.1 使用 for 循环

```java
int[] numbers = {1, 2, 3, 4, 5};
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
{% raw %}
// 遍历二维数组
int[][] matrix = {{1, 2}, {3, 4}, {5, 6}};
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
```
{% endraw %}
### 5.2 使用增强 for 循环（for-each）

```java
int[] numbers = {1, 2, 3, 4, 5};
for (int number : numbers) {
    System.out.println(number);
}
{% raw %}
// 遍历二维数组

int[][] matrix = {{1, 2}, {3, 4}, {5, 6}};
for (int[] row : matrix) {
    for (int element : row) {
        System.out.print(element + " ");
    }
    System.out.println();
}
{% endraw %}
```

## 6. 多维数组

Java 支持多维数组，最常见的是二维数组：
{% raw %}
```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};{% endraw %}
System.out.println(matrix[1][2]); // 输出 6

// 创建不规则数组（每行长度可以不同）
int[][] irregular = new int[3][];
irregular[0] = new int[2];
irregular[1] = new int[3];
irregular[2] = new int[4];
```

## 7. 数组操作

### 7.1 数组排序

使用 `Arrays.sort()` 方法：

```java
import java.util.Arrays;

int[] numbers = {5, 2, 8, 1, 4};
Arrays.sort(numbers);
System.out.println(Arrays.toString(numbers)); // 输出 [1, 2, 4, 5, 8]

// 部分排序
int[] partialSort = {5, 2, 8, 1, 4};
Arrays.sort(partialSort, 1, 4); // 只排序索引 1 到 3 的元素
System.out.println(Arrays.toString(partialSort)); // 输出 [5, 1, 2, 8, 4]

// 自定义排序（使用 Comparator）
String[] fruits = {"banana", "apple", "Cherry", "Date"};
Arrays.sort(fruits, String.CASE_INSENSITIVE_ORDER);
System.out.println(Arrays.toString(fruits)); // 输出 [apple, banana, Cherry, Date]
```

### 7.2 数组复制

使用 `Arrays.copyOf()` 方法：

```java
int[] originalArray = {1, 2, 3, 4, 5};
int[] copiedArray = Arrays.copyOf(originalArray, originalArray.length);
System.out.println(Arrays.toString(copiedArray)); // 输出 [1, 2, 3, 4, 5]

// 复制并扩展数组
int[] extendedArray = Arrays.copyOf(originalArray, 7);
System.out.println(Arrays.toString(extendedArray)); // 输出 [1, 2, 3, 4, 5, 0, 0]

// 使用 System.arraycopy()
int[] sourceArray = {1, 2, 3, 4, 5};
int[] destArray = new int[5];
System.arraycopy(sourceArray, 0, destArray, 0, sourceArray.length);
System.out.println(Arrays.toString(destArray)); // 输出 [1, 2, 3, 4, 5]
```

### 7.3 数组转换为集合

使用 `Arrays.asList()` 方法：

```java
String[] array = {"apple", "banana", "cherry"};
List<String> list = new ArrayList<>(Arrays.asList(array));
System.out.println(list); // 输出 [apple, banana, cherry]

// 直接使用 asList() 返回的列表（注意：这是固定大小的列表）
List<String> fixedList = Arrays.asList(array);
System.out.println(fixedList); // 输出 [apple, banana, cherry]

// Java 9+ 可以使用 List.of()
List<String> immutableList = List.of(array);
System.out.println(immutableList); // 输出 [apple, banana, cherry]
```

### 7.4 数组转换为字符串

使用 `Arrays.toString()` 方法：

```java
int[] numbers = {1, 2, 3, 4, 5};
String arrayString = Arrays.toString(numbers);
System.out.println(arrayString); // 输出 [1, 2, 3, 4, 5]

// 多维数组使用 deepToString()
int[][] matrix = {{1, 2}, {3, 4}};
String matrixString = Arrays.deepToString(matrix);
System.out.println(matrixString); // 输出 [[1, 2], [3, 4]]
```

### 7.5 数组填充

使用 `Arrays.fill()` 方法：

```java
int[] numbers = new int[5];
Arrays.fill(numbers, 10);
System.out.println(Arrays.toString(numbers)); // 输出 [10, 10, 10, 10, 10]

// 部分填充
int[] partialFill = new int[5];
Arrays.fill(partialFill, 1, 4, 20);
System.out.println(Arrays.toString(partialFill)); // 输出 [0, 20, 20, 20, 0]
```

### 7.6 数组比较

使用 `Arrays.equals()` 方法：

```java
int[] array1 = {1, 2, 3};
int[] array2 = {1, 2, 3};
int[] array3 = {1, 2, 4};

System.out.println(Arrays.equals(array1, array2)); // 输出 true
System.out.println(Arrays.equals(array1, array3)); // 输出 false

// 比较多维数组
int[][] matrix1 = {{1, 2}, {3, 4}};
int[][] matrix2 = {{1, 2}, {3, 4}};
System.out.println(Arrays.deepEquals(matrix1, matrix2)); // 输出 true
```

### 7.7 数组搜索

使用 `Arrays.binarySearch()` 方法（注意：数组必须先排序）：

```java
int[] numbers = {2, 4, 6, 8, 10, 12, 14, 16};
int index = Arrays.binarySearch(numbers, 10);
System.out.println("Index of 10: " + index); // 输出 Index of 10: 4

// 如果元素不存在，返回 -(insertion point) - 1
int notFoundIndex = Arrays.binarySearch(numbers, 7);
System.out.println("Index of 7: " + notFoundIndex); // 输出 Index of 7: -4
```

## 8. 注意事项

- 数组的大小一旦确定就不能改变。如果需要可变大小的集合，考虑使用 ArrayList。
- 访问数组时要注意索引范围，越界访问会导致 ArrayIndexOutOfBoundsException。
- 多维数组中，每个子数组的长度可以不同。
- 数组是引用类型，当作为参数传递时，传递的是引用，而不是数组的副本。
- 在使用 Arrays 类的方法时，记得导入 `java.util.Arrays`。
- 对于大型数组，考虑使用并行处理方法，如 `Arrays.parallelSort()`。
- 在处理字符数组时，要注意安全性，因为 String 是不可变的，而 char[] 是可变的。
- 使用泛型数组时要小心，因为 Java 不允许直接创建泛型数组。

## 9. 高级主题

### 9.1 可变参数（Varargs）

Java 允许使用可变参数，这在内部实际上是一个数组：

```java
public static void printAll(String... args) {
    for (String arg : args) {
        System.out.println(arg);
    }
}

// 使用
printAll("Hello", "World", "Java");
```

### 9.2 数组流操作

Java 8+ 支持将数组转换为流进行操作：

```java
int[] numbers = {1, 2, 3, 4, 5};
int sum = Arrays.stream(numbers).sum();
System.out.println("Sum: " + sum); // 输出 Sum: 15

// 使用流进行过滤和映射
String[] names = {"Alice", "Bob", "Charlie", "David"};
List<String> filteredNames = Arrays.stream(names)
    .filter(name -> name.length() > 3)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
System.out.println(filteredNames); // 输出 [ALICE, CHARLIE, DAVID]
```

## 10. 数组的内存管理

Java 数组在内存中是连续存储的，这有助于提高访问效率。了解数组的内存管理可以帮助我们更好地使用数组：

- 数组对象本身存储在堆内存中。
- 对于基本类型数组，元素直接存储在数组对象中。
- 对于引用类型数组，数组中存储的是对象的引用，而对象本身存储在堆的其他位置。

```java
int[] primitiveArray = new int[5];     // 在堆上分配连续的内存空间
String[] referenceArray = new String[5]; // 数组本身在堆上，但每个String对象可能在堆的不同位置
```

## 11. 数组的性能考虑

- 数组的随机访问时间复杂度为 O(1)，这使得它在需要频繁随机访问元素的场景中表现优秀。
- 在数组开头或中间插入/删除元素的时间复杂度为 O(n)，因为需要移动其他元素。
- 对于大型数组，考虑使用并行算法来提高性能，如 `Arrays.parallelSort()`。

## 12. 数组与集合的互操作

除了之前提到的 `Arrays.asList()`，还有其他方法可以在数组和集合之间进行转换：

```java
// 集合转数组
List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
String[] array = list.toArray(new String[0]);

// 使用 Stream API 进行转换
int[] intArray = {1, 2, 3, 4, 5};
List<Integer> intList = Arrays.stream(intArray).boxed().collect(Collectors.toList());
```

## 13. 数组的克隆

Java 数组支持克隆，但要注意浅拷贝和深拷贝的区别：

```java
int[] original = {1, 2, 3, 4, 5};
int[] clone = original.clone();

// 对于引用类型，clone() 方法只进行浅拷贝
Person[] people = {new Person("Alice"), new Person("Bob")};
Person[] peopleClone = people.clone();
people[0].setName("Alicia");
System.out.println(peopleClone[0].getName()); // 输出 "Alicia"
```

## 14. 数组与反射

Java 反射 API 允许我们在运行时操作数组：

```java
import java.lang.reflect.Array;

// 使用反射创建数组
int[] reflectiveArray = (int[]) Array.newInstance(int.class, 5);

// 使用反射设置和获取数组元素
Array.setInt(reflectiveArray, 0, 10);
int value = Array.getInt(reflectiveArray, 0);
System.out.println(value); // 输出 10
```

## 15. 数组的常见算法

一些常见的数组算法问题及其解决方案：

### 15.1 查找最大和最小元素

```java
int[] numbers = {3, 1, 4, 1, 5, 9, 2, 6, 5};
int max = Arrays.stream(numbers).max().getAsInt();
int min = Arrays.stream(numbers).min().getAsInt();
System.out.println("Max: " + max + ", Min: " + min);
```

### 15.2 数组反转

```java
public static void reverse(int[] arr) {
    for (int i = 0; i < arr.length / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
```

### 15.3 查找重复元素

```java
public static List<Integer> findDuplicates(int[] arr) {
    Set<Integer> seen = new HashSet<>();
    return Arrays.stream(arr)
                 .filter(n -> !seen.add(n))
                 .boxed()
                 .collect(Collectors.toList());
}
```

## 16. 数组在实际应用中的使用

- 图像处理：使用二维数组表示像素。
- 矩阵运算：科学计算和图形学中的矩阵操作。
- 缓存实现：使用循环数组实现简单的缓存。
- 多线程：使用数组来分配和管理线程。

```java
// 简单的图像处理示例
int[][] image = new int[height][width];
for (int y = 0; y < height; y++) {
    for (int x = 0; x < width; x++) {
        image[y][x] = (x + y) % 256; // 创建一个简单的渐变
    }
}
```

## 17. 数组的内存优化

在处理大型数组时，内存优化变得尤为重要：

- 使用原始类型数组而不是包装类型数组可以显著减少内存使用。
- 考虑使用短整型（short）或字节（byte）来代替整型（int），如果值范围允许的话。
- 对于稀疏数组，考虑使用替代数据结构，如哈希表或压缩行/列存储。

```java
// 内存效率比较
int[] efficientArray = new int[1000000]; // 约 4MB
Integer[] lessEfficientArray = new Integer[1000000]; // 约 16MB + 对象开销
```

## 18. 数组与位操作

在某些情况下，使用位操作可以优化数组操作：

```java
// 使用位操作快速判断奇偶性
public static boolean isEven(int n) {
    return (n & 1) == 0;
}

// 使用位操作进行简单加密
public static void xorEncrypt(byte[] data, byte key) {
    for (int i = 0; i < data.length; i++) {
        data[i] ^= key;
    }
}
```

## 19. 数组与设计模式

数组在许多设计模式中扮演重要角色：

- 对象池模式：使用数组预先分配一组对象。
- 享元模式：使用数组存储共享的对象实例。
- 命令模式：使用数组存储一系列命令对象。

```java
// 简单的对象池实现
class SimpleObjectPool {
    private Object[] pool;
    private boolean[] used;

    public SimpleObjectPool(int size) {
        pool = new Object[size];
        used = new boolean[size];
        for (int i = 0; i < size; i++) {
            pool[i] = new SomeObject();
        }
    }

    public Object acquire() {
        for (int i = 0; i < pool.length; i++) {
            if (!used[i]) {
                used[i] = true;
                return pool[i];
            }
        }
        return null; // 池已满
    }

    public void release(Object obj) {
        for (int i = 0; i < pool.length; i++) {
            if (pool[i] == obj) {
                used[i] = false;
                break;
            }
        }
    }
}
```

## 20. 数组与函数式编程

Java 8 引入的函数式编程特性为数组操作提供了新的可能：

```java
import java.util.function.IntUnaryOperator;

public class ArrayTransformer {
    public static int[] transform(int[] array, IntUnaryOperator operator) {
        return Arrays.stream(array)
                     .map(operator)
                     .toArray();
    }

    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int[] squared = transform(numbers, x -> x * x);
        System.out.println(Arrays.toString(squared)); // 输出 [1, 4, 9, 16, 25]
    }
}
```

## 21. 数组与并发编程

在并发编程中，数组也扮演着重要角色：

```java
import java.util.concurrent.atomic.AtomicIntegerArray;

public class ConcurrentArrayExample {
    public static void main(String[] args) {
        AtomicIntegerArray atomicArray = new AtomicIntegerArray(10);

        // 多线程安全地增加数组元素
        atomicArray.getAndIncrement(5);
        
        // 原子性地更新数组元素
        atomicArray.compareAndSet(5, 1, 2);

        System.out.println(atomicArray.get(5));
    }
}
```

## 22. 数组与性能分析

了解如何分析和优化数组操作的性能是很重要的：

- 使用 JMH（Java Microbenchmark Harness）进行微基准测试。
- 利用 JVM 的 JIT 编译器优化，如循环展开和向量化。
- 考虑缓存友好的数据访问模式，特别是对于大型多维数组。

```java
// 缓存友好的矩阵乘法示例
public static int[][] multiplyMatrix(int[][] a, int[][] b) {
    int n = a.length;
    int[][] result = new int[n][n];
    for (int i = 0; i < n; i++) {
        for (int k = 0; k < n; k++) {
            for (int j = 0; j < n; j++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}
```

## 23. 数组与泛型

虽然 Java 不允许创建泛型数组，但我们可以通过一些技巧来使用泛型和数组：

```java
public class GenericArray<T> {
    private T[] array;

    @SuppressWarnings("unchecked")
    public GenericArray(int size) {
        // 使用 Object 数组并进行类型转换
        array = (T[]) new Object[size];
    }

    public void set(int index, T item) {
        array[index] = item;
    }

    public T get(int index) {
        return array[index];
    }
}
```

## 24. 数组与注解

Java 允许我们创建注解类型数组：

```java
public @interface MyAnnotation {
    String[] value();
}

@MyAnnotation({"value1", "value2", "value3"})
public class MyClass {
    // 类的实现
}
```

## 25. 数组与序列化

当序列化包含数组的对象时，需要注意：

```java
import java.io.*;

public class ArraySerialization implements Serializable {
    private int[] numbers;
    private transient int[] cachedValues; // transient 数组不会被序列化

    public ArraySerialization(int[] numbers) {
        this.numbers = numbers;
        this.cachedValues = new int[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            cachedValues[i] = numbers[i] * 2;
        }
    }

    private void writeObject(ObjectOutputStream out) throws IOException {
        out.defaultWriteObject();
        // 可以在这里自定义序列化逻辑
    }

    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
        in.defaultReadObject();
        // 反序列化后重新计算 cachedValues
        this.cachedValues = new int[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            cachedValues[i] = numbers[i] * 2;
        }
    }
}
```

## 26. 数组与 NIO

Java NIO 提供了 ByteBuffer，可以高效地处理字节数组：

```java
import java.nio.ByteBuffer;

public class NIOArrayExample {
    public static void main(String[] args) {
        byte[] bytes = {1, 2, 3, 4, 5};
        ByteBuffer buffer = ByteBuffer.wrap(bytes);

        // 读取 buffer 中的数据
        while (buffer.hasRemaining()) {
            System.out.println(buffer.get());
        }

        // 写入数据到 buffer
        buffer.rewind(); // 重置 position 到开始
        buffer.put((byte) 6);
        buffer.put((byte) 7);

        // 将 buffer 转换回字节数组
        byte[] newBytes = new byte[buffer.capacity()];
        buffer.rewind();
        buffer.get(newBytes);

        System.out.println(Arrays.toString(newBytes)); // 输出 [6, 7, 3, 4, 5]
    }
}
```

## 27. 数组与 JNI (Java Native Interface)

JNI 允许 Java 代码与其他语言（如 C 或 C++）编写的代码交互。在 JNI 中，数组处理是一个重要的话题：

```java
public class NativeArrayExample {
    static {
        System.loadLibrary("nativelib");
    }

    private native void modifyArray(int[] array);

    public static void main(String[] args) {
        NativeArrayExample example = new NativeArrayExample();
        int[] array = {1, 2, 3, 4, 5};
        example.modifyArray(array);
        System.out.println(Arrays.toString(array));
    }
}
```

对应的 C 代码可能如下：

```c
#include <jni.h>
#include "NativeArrayExample.h"

JNIEXPORT void JNICALL Java_NativeArrayExample_modifyArray
  (JNIEnv *env, jobject obj, jintArray array) {
    jint *elements = (*env)->GetIntArrayElements(env, array, 0);
    int length = (*env)->GetArrayLength(env, array);
    
    for (int i = 0; i < length; i++) {
        elements[i] *= 2;
    }

    (*env)->ReleaseIntArrayElements(env, array, elements, 0);
}
```

## 28. 数组与密码学

在 Java 中，数组经常用于处理密码学相关的操作：

```java
import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Base64;

public class ArrayCryptography {
    private static final String ALGO = "AES";

    public static byte[] encrypt(byte[] data, byte[] keyValue) throws Exception {
        Key key = new SecretKeySpec(keyValue, ALGO);
        Cipher c = Cipher.getInstance(ALGO);
        c.init(Cipher.ENCRYPT_MODE, key);
        return c.doFinal(data);
    }

    public static byte[] decrypt(byte[] encryptedData, byte[] keyValue) throws Exception {
        Key key = new SecretKeySpec(keyValue, ALGO);
        Cipher c = Cipher.getInstance(ALGO);
        c.init(Cipher.DECRYPT_MODE, key);
        return c.doFinal(encryptedData);
    }

    public static void main(String[] args) throws Exception {
        String data = "Hello, World!";
        byte[] keyValue = new byte[]{'T','h','i','s','I','s','A','S','e','c','r','e','t','K','e','y'};
        
        byte[] encryptedData = encrypt(data.getBytes(), keyValue);
        System.out.println("Encrypted: " + Base64.getEncoder().encodeToString(encryptedData));
        
        byte[] decryptedData = decrypt(encryptedData, keyValue);
        System.out.println("Decrypted: " + new String(decryptedData));
    }
}
```

## 29. 数组与内存映射文件

Java NIO 允许我们使用内存映射文件来处理大型数组，这在处理超大数据集时特别有用：

```java
import java.io.RandomAccessFile;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;

public class MemoryMappedArrayExample {
    public static void main(String[] args) throws Exception {
        try (RandomAccessFile file = new RandomAccessFile("largeArray.dat", "rw")) {
            MappedByteBuffer buffer = file.getChannel().map(
                FileChannel.MapMode.READ_WRITE, 0, 1024 * 1024 * 1024); // 1GB

            // 写入数据
            for (int i = 0; i < 1024 * 1024; i++) {
                buffer.putInt(i);
            }

            // 读取数据
            buffer.flip();
            for (int i = 0; i < 10; i++) {
                System.out.println(buffer.getInt());
            }
        }
    }
}
```

## 30. 数组与并行计算

Java 8 引入的并行流可以用于高效处理大型数组：

```java
import java.util.Arrays;

public class ParallelArrayExample {
    public static void main(String[] args) {
        int[] numbers = new int[1000000];
        Arrays.parallelSetAll(numbers, i -> i * 2);
        long sum = Arrays.stream(numbers).parallel().sum();
        System.out.println("Sum: " + sum);
    }
}
```

## 31. 数组与 Liquid 模板

在 Liquid 模板中，我们需要注意如何正确地处理数组和对象：

```liquid
{% raw %}
{% assign numbers = "1, 2, 3, 4, 5" | split: ", " %}

<ul>
{% for number in numbers %}
  <li>{{ number }}</li>
{% endfor %}
</ul>
{% endraw %}
```

在这个例子中，我们使用 `split` 过滤器将字符串转换为数组，然后使用 `for` 循环遍历数组。为了避免 Liquid 解析错误，我们使用 `{% raw %}` 标签包裹代码块。
```
</file>