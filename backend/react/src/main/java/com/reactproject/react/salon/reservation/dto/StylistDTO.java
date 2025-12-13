/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.reactproject.react.salon.reservation.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
/**
 *
 * @author tu
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StylistDTO {

    private String stylistName;

    private int debutYear;

    private LocalDate birthday;

    private String positionName;
}
