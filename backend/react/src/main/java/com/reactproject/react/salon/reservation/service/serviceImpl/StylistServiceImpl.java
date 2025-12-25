package com.reactproject.react.salon.reservation.service.serviceImpl;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.reactproject.react.salon.reservation.dto.StylistDTO;
import com.reactproject.react.salon.reservation.exception.NotFoundException;
import com.reactproject.react.salon.reservation.mapper.StylistMapper;
import com.reactproject.react.salon.reservation.service.StylistService;

import lombok.RequiredArgsConstructor;

/**
 *
 * @author tu
 */
@Service
@RequiredArgsConstructor
public class StylistServiceImpl implements StylistService {

    private final StylistMapper stylistMapper;

    /**
     * Stylist一覧取得
     * @param StylistDTO dto
     * Exception
     */
    @Override
    public List<StylistDTO> stylist(StylistDTO dto) throws Exception{
        List<StylistDTO> dtoList = new ArrayList<>();
        try {
            dtoList = stylistMapper.findAll();
        } catch(Exception e){
            throw new NotFoundException("データの取得に失敗しました。");
        }

        dtoList.forEach(e -> e.setPositionName(positionStr(e.getPosition())));

        dtoList.stream().map(e -> new StylistDTO(
            e.getStylistName(),
            e.getDebutYear(),
            e.getBirthday(),
            birthYear(e.getBirthday()),
            e.getPosition(),
            positionStr(e.getPosition())
        ))
        .toList();
        
        return dtoList;
    }

    /*誕生日設定 */
    private String birthYear(LocalDate birthday) {

        if(birthday == null) return "非公開";
        LocalDate today = LocalDate.now();
        if(birthday.isAfter(today)) return "0歳";
        int year = Period.between(birthday, today).getYears();
        return year + "歳";
    }

    /*役職管理 */
    private String positionStr(Integer position){
        if(position == null) return "役職なし";
        return switch (position) {
            case 1 -> "店長";
            case 2 -> "副店長";
            case 3 -> "トップスタイリスト";
            case 4 -> "スタイリスト";
            case 5 -> "アシスタント";
            default -> "一般";
        };
    }
    
}