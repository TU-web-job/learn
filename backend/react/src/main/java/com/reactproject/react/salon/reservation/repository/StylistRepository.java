package com.reactproject.react.salon.reservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reactproject.react.salon.reservation.entity.StylistEntity;

/**
 *
 * @author usui
 */
public interface StylistRepository extends JpaRepository<StylistEntity, Long>{

    List<StylistEntity> findByStylistId();

    //position結合DTO
    List<com.reactproject.react.salon.reservation.dto.StylistDTO> findByStylistDTO();
}
