/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.reactproject.react.salon.reservation.service.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.reactproject.react.salon.reservation.dto.StylistDTO;
import com.reactproject.react.salon.reservation.exception.NotFoundException;
import com.reactproject.react.salon.reservation.repository.StylistRepository;
import com.reactproject.react.salon.reservation.service.StylistService;

import lombok.RequiredArgsConstructor;

/**
 *
 * @author tu
 */
@Service
@RequiredArgsConstructor
public class StylistServiceImpl implements StylistService{

    private final StylistRepository stylistRepository;

    /**
     * Stylist一覧取得
     */
    @Override
    public List<StylistDTO> stylist(StylistDTO dto) throws Exception{
        List<StylistDTO> dtoList = new ArrayList<>();
        try {
            dtoList = stylistRepository.findByStylistDTO();
        } catch(Exception e){
            e.printStackTrace();
            throw new NotFoundException("データの取得に失敗しました。");
        }
        return dtoList;
    }

}
