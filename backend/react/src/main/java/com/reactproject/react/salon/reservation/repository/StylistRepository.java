package com.reactproject.react.salon.reservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.reactproject.react.salon.reservation.dto.StylistDTO;
import com.reactproject.react.salon.reservation.entity.StylistEntity;

/**
 *
 * @author usui
 */
public interface StylistRepository extends JpaRepository<StylistEntity, Long>{

    List<StylistEntity> findByStylistId();

    //position結合DTO
    @Query("""
        select new com.reactproject.react.salon.reservation.dto.StylistDTO
        from StylistEntity se
        left join Stylist_PositionEntity sp 
        on sp.postion = se.postion
        """)
    List<StylistDTO> findAllAsDTO();
}
