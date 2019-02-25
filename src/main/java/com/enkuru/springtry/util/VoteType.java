package com.enkuru.springtry.util;

/**
 * Create Info
 * User: ME99844
 * Date: 25/02/2019
 * Time: 14:57
 */
public enum VoteType {
    Like("L"), Dislike("D");

    private String type;

    VoteType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
