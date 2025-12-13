/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

package com.reactproject.react.salon.reservation.service;

import java.util.List;

import com.reactproject.react.salon.reservation.dto.StylistDTO;

/**
 *
 * @author tu
 */
public interface StylistService {

    public List<StylistDTO> stylist(StylistDTO dto) throws Exception;

}
