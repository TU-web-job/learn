package com.reactproject.react.salon.reservation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author tu
 */
@Controller
@RequestMapping("/salon")
public class ReservationController {

    @GetMapping("/")
    public String calendar(Model model) {
        model.addAttribute("","");
        return "/salon";
    }

    @GetMapping("/reserve")
    public String reserve(Model model){
        
        return "/salon/reserve";
    }

}
