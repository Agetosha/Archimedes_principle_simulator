package com.sam.archimedes.web.ui;

import com.sam.archimedes.model.Archimedes;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@Controller
@Slf4j
public class ArchimedesRestController {

    // GET-запрос для отображения страницы
    @GetMapping("/archimedes")
    public String showArchimedesPage() {
        return "archimedes"; // Возвращаем название HTML-шаблона
    }

    // POST-запрос для вычисления условий плавания тела
    @PostMapping("/archimedes")
    @ResponseBody
    public Map<String, Object> calculateArchimedes(
            @RequestParam double DensityOfObject,
            @RequestParam double DensityOfLiquid,
            @RequestParam double Mass,
            @RequestParam double Width,
            @RequestParam double Length) {

        // Создаем экземпляр компонента
        Archimedes archimedes = new Archimedes();

        // Устанавливаем значения
          Archimedes.setMass(Mass);
          Archimedes.setDensityOfObject(DensityOfObject);
          Archimedes.setDensityOfLiquid(DensityOfLiquid);
          Archimedes.setLength(Length);
          Archimedes.setWidth(Width);

        // нужные расчёты
        double archimedesPower = archimedes.calculateArchimedesPower();
        double heightOfPartInFluid = archimedes.calculateHeightOfPartInFluid();
        double volumeOfDisplacedFluid = archimedes.calculateVolumeOfDisplacedFluid();
        String howFloat = archimedes.HowFloat();

        // Возвращаем результат в формате JSON
        Map<String, Object> response = new HashMap<>();
        response.put("archimedesPower", archimedesPower);
        response.put("heightOfPartInFluid", heightOfPartInFluid);
        response.put("volumeOfDisplacedFluid", volumeOfDisplacedFluid);
        response.put("howFloat", howFloat);

        for (Map.Entry<String, Object> pair : response.entrySet()) {
            log.info("response"+pair.getKey() +""+ pair.getValue());
        }

        return response;
    }
}

