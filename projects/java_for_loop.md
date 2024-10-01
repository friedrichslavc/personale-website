    # Java for 循环

Java for 循环提供了一种紧凑的方式来迭代一定次数或遍历集合。

## 基本语法

```java
for (初始化; 条件; 更新) {
    // 循环体
}
```

## 示例

### 遍历数组

```java
int[] numbers = {1, 2, 3, 4, 5};
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

### 遍历集合

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
for (String name : names) {
    System.out.println(name);
}
```

## 高级示例：图像处理与数据分析

以下是一个复杂的 for 循环示例，展示了如何使用嵌套循环进行图像处理和数据分析：

```java
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class AdvancedForLoopExample {
    public static void main(String[] args) throws IOException {
        // 读取图像
        BufferedImage image = ImageIO.read(new File("input.jpg"));
        int width = image.getWidth();
        int height = image.getHeight();

        // 创建直方图数组（假设是8位灰度图像）
        int[] histogram = new int[256];

        // 图像处理：转为灰度并计算直方图
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                int rgb = image.getRGB(x, y);
                int r = (rgb >> 16) & 0xFF;
                int g = (rgb >> 8) & 0xFF;
                int b = rgb & 0xFF;
                int gray = (r + g + b) / 3;

                // 设置灰度值
                int grayRGB = (gray << 16) | (gray << 8) | gray;
                image.setRGB(x, y, grayRGB);

                // 更新直方图
                histogram[gray]++;
            }
        }

        // 找出最频繁的灰度值
        int maxFrequency = 0;
        int mostCommonGray = 0;
        for (int i = 0; i < histogram.length; i++) {
            if (histogram[i] > maxFrequency) {
                maxFrequency = histogram[i];
                mostCommonGray = i;
            }
        }

        // 计算平均亮度
        long totalBrightness = 0;
        for (int i = 0; i < histogram.length; i++) {
            totalBrightness += i * histogram[i];
        }
        double averageBrightness = (double) totalBrightness / (width * height);

        // 输出结果
        System.out.printf("图像大小: %dx%d\n", width, height);
        System.out.printf("最常见的灰度值: %d (出现 %d 次)\n", mostCommonGray, maxFrequency);
        System.out.printf("平均亮度: %.2f\n", averageBrightness);

        // 保存处理后的图像
        ImageIO.write(image, "jpg", new File("output_gray.jpg"));

        // 直方图均衡化
        int[] cdf = new int[256];
        cdf[0] = histogram[0];
        for (int i = 1; i < 256; i++) {
            cdf[i] = cdf[i-1] + histogram[i];
        }

        int cdfMin = cdf[0];
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                int rgb = image.getRGB(x, y);
                int gray = rgb & 0xFF;
                int newGray = (int) (((float)(cdf[gray] - cdfMin) / ((width * height) - cdfMin)) * 255);
                int newRGB = (newGray << 16) | (newGray << 8) | newGray;
                image.setRGB(x, y, newRGB);
            }
        }

        // 保存均衡化后的图像
        ImageIO.write(image, "jpg", new File("output_equalized.jpg"));
    }
}
```

## 总结

for 循环是 Java 中非常强大和灵活的循环结构。从简单的数组遍历到复杂的图像处理，for 循环都能胜任。掌握 for 循环的各种用法对于编写高效的 Java 程序至关重要。
