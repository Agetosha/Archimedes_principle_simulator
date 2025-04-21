package com.sam.archimedes.model;

import org.springframework.stereotype.Component;

@Component
public class Archimedes {
    private static double DensityOfObject;
    private static double DensityOfLiquid;
    private static double Mass;
    private static double Length;
    private static double Width;

    // посчитать высоту погружения в жидкость
    public double calculateHeightOfPartInFluid() {
        if (DensityOfObject >= DensityOfLiquid) {
            // просто возвращаем высоту тела
            return (Mass / DensityOfObject) / (Width * Length);
        }
        // возвращаем высоту тела в жидкости
        return (Mass / (DensityOfLiquid * Width * Length));
    }

    // посчитать объём вытесненной жидкости
    public double calculateVolumeOfDisplacedFluid() {
        return Mass / DensityOfLiquid;
    }

    // посчитать архимедову силу
    public double calculateArchimedesPower() {
        return calculateVolumeOfDisplacedFluid() * DensityOfObject * Constants.getAcceleration_of_gravity();
    }

    // определить, как будет плавать
    public String HowFloat() {
        if (DensityOfObject < DensityOfLiquid) {
            return "тело плавает на поверхности";
            // тело плавает на поврехности
        }
        if (DensityOfLiquid == DensityOfObject) {
            return "тело в равновесии";
        }
        if (DensityOfObject > DensityOfLiquid) {
            return "тело тонет";
        }
        return " ";
    }

    public static void setDensityOfObject(double DensityOfObject) {
        Archimedes.DensityOfObject = DensityOfObject;
    }

    public static void setDensityOfLiquid(double DensityOfLiquid) {
        Archimedes.DensityOfLiquid = DensityOfLiquid;
    }

    public static void setMass(double Mass) {
        Archimedes.Mass = Mass;
    }

    public static void setLength(double Length) {
        Archimedes.Length = Length;
    }

    public static void setWidth(double Width) {
        Archimedes.Width = Width;
    }
}



