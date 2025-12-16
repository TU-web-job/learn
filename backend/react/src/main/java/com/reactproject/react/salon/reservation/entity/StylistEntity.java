package com.reactproject.react.salon.reservation.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "stylist")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class StylistEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)@Column(name = "stylist_id")
    private int stylistId;

    @Column(name = "stylist_name")
    private String stylistName;

    @Column(name = "debut_year")
    private int debutYear;

    @Column(name = "birthday")
    private LocalDate birthday;

    @Column(name = "position")
    private int position;
}