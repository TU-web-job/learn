package com.reactproject.react.salon.reservation.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "reservation")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReservationEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)@Column(name = "reservation_id")
    private int reservationId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "reservation_date", nullable = false)
    private LocalDateTime reservationDate;

    @Column(name = "email", nullable = false )
    private String email;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "memo")
    private String memo;
}