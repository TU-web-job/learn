/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.reactproject.react.salon.reservation.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author tu
 */
@Entity(name = "stylist_position")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Stylist_PositionEntity {

    @Id @Column(name = "position")
    private int position;

    @Column(name = "position_name")
    private String positionName;

}
